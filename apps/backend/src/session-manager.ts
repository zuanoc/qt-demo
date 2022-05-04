import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { text } from '@qt-demo/model';

export interface UserSession {
  userId: string;
  inputStream: Observable<text.UserAction>;
}

@Injectable()
export class SessionManager {
  sessionMap: Map<string, UserSession> = new Map<string, UserSession>();

  actionStream: Subject<text.UserAction> = new Subject<text.UserAction>();

  textMap: Map<string, text.UserText> = new Map<string, text.UserText>();

  userTextMap: Map<string, text.UserText[]> = new Map<string, text.UserText[]>();

  registerSession(userSession: UserSession) {
    const userId = userSession.userId;
    this.sessionMap.set(userId, userSession);
    this.userTextMap.set(userId, []);
    userSession.inputStream.subscribe({
      next: action => {
        this.handleUserAction(action, userId);
      },
      complete: () => {
        this.unregisterSession(userId);
      },
    });
  }

  private unregisterSession(userId: string) {
    this.sessionMap.delete(userId);
    const userTexts = this.userTextMap.get(userId);
    for (const userText of userTexts) {
      this.textMap.delete(userText.id);
    }
    this.userTextMap.delete(userId);
    this.actionStream.next({
      userId,
      type: text.ActionType.USER_DELETION,
      userDeletionAction: {
        userId,
      },
    });
  }

  private handleUserAction(action: text.UserAction, userId: string) {
    switch (action.type) {
      case text.ActionType.NEW_INPUT: {
        this.addNewText(action, userId);
        break;
      }
      case text.ActionType.TEXT_TYPING: {
        this.updateText(action);
        break;
      }
      case text.ActionType.TEXT_SAVE:
        // do nothing
        break;
      case text.ActionType.TEXT_CANCEL: {
        this.removeText(action, userId);
        break;
      }
      default:
        throw new Error('Unsupported type ' + action.type);
    }

    this.actionStream.next(action);
  }

  private removeText(action: text.UserAction, userId: string) {
    const { id } = action.textCancelAction;
    this.textMap.delete(id);
    const userTexts = this.userTextMap.get(userId);
    this.userTextMap.set(
      userId,
      userTexts.filter(value1 => value1.id !== id),
    );
  }

  private updateText(action: text.UserAction) {
    const textTypingAction = action.textTypingAction;
    const userText = this.textMap.get(textTypingAction.id);
    this.textMap.set(textTypingAction.id, {
      ...userText,
      text: textTypingAction.type,
    });
  }

  private addNewText(action: text.UserAction, userId: string) {
    const newInputAction = action.newInputAction;
    const newText = {
      userId,
      id: newInputAction.id,
      text: '',
      x: newInputAction.x,
      y: newInputAction.y,
      w: newInputAction.w,
      h: newInputAction.h,
      color: newInputAction.color,
    };
    this.textMap.set(newInputAction.id, newText);
    const userTexts = this.userTextMap.get(userId);
    this.userTextMap.set(userId, [...userTexts, newText]);
  }
}
