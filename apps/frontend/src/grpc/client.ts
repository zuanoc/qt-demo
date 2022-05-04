import { grpc } from '@improbable-eng/grpc-web';
import { createChannel, createClient, Metadata } from 'nice-grpc-web';
import { Observable, Subject } from 'rxjs';
import { eachValueFrom } from 'rxjs-for-await';
import { fromAsyncIterator } from 'rx-from-async-iterator';
import { text } from '@qt-demo/model';
import useStore from '../store/use-store';

const channel = createChannel('http://localhost:8080', grpc.WebsocketTransport());
const textServiceClient: text.TextServiceClient = createClient(
  text.TextServiceDefinition,
  channel,
);

async function* actionStream(
  action$: Observable<text.UserAction>,
): AsyncGenerator<text.DeepPartial<text.UserAction>> {
  for await (const action of eachValueFrom(action$)) {
    yield action;
  }
}

class GrpcService {
  userActionStream: Subject<text.UserAction>;

  serverResponseStream: Observable<text.UserAction>;

  init(userId: string) {
    this.userActionStream = new Subject<text.UserAction>();
    const serverResponses = textServiceClient.connection(
      actionStream(this.userActionStream),
      {
        metadata: Metadata({
          userId,
        }),
      },
    );
    const ag = serverResponses[Symbol.asyncIterator]() as AsyncGenerator<
      text.UserAction,
      void,
      void
    >;
    this.serverResponseStream = fromAsyncIterator<text.UserAction>(
      ag,
    ) as unknown as Observable<text.UserAction>;
    this.serverResponseStream.subscribe(action => {
      this.handleReceivedUserAction(action);
    });
  }

  handleReceivedUserAction(action: text.UserAction) {
    const canvasState = useStore.getState().canvasState;
    if (action.userId === canvasState.userId) {
      return;
    }

    switch (action.type) {
      case text.ActionType.NEW_INPUT: {
        canvasState.handleReceivedNewInputAction(action);
        break;
      }
      case text.ActionType.TEXT_TYPING: {
        canvasState.handleReceivedTextTypingAction(action);
        break;
      }
      case text.ActionType.TEXT_CANCEL: {
        canvasState.handleReceivedTextCancelAction(action);
        break;
      }
      case text.ActionType.FETCH_ALL: {
        canvasState.handleReceivedFetchAllAction(action);
        break;
      }
      case text.ActionType.USER_DELETION: {
        canvasState.handleReceivedUserDeletionAction(action);
        break;
      }
      default:
        throw new Error('Not supported action type: ' + action.type);
    }
  }

  sendNewInputAction(action: text.NewInputAction) {
    const userId = useStore.getState().canvasState.userId;
    this.userActionStream.next({
      userId,
      type: text.ActionType.NEW_INPUT,
      newInputAction: action,
      textTypingAction: undefined,
      textSaveAction: undefined,
      textCancelAction: undefined,
    });
  }

  sendTextTypingAction(action: text.TextTypingAction) {
    const userId = useStore.getState().canvasState.userId;
    this.userActionStream.next({
      userId,
      type: text.ActionType.TEXT_TYPING,
      newInputAction: undefined,
      textTypingAction: action,
      textSaveAction: undefined,
      textCancelAction: undefined,
    });
  }

  sendTextSaveAction(action: text.TextSaveAction) {
    const userId = useStore.getState().canvasState.userId;
    this.userActionStream.next({
      userId,
      type: text.ActionType.TEXT_SAVE,
      newInputAction: undefined,
      textTypingAction: undefined,
      textSaveAction: action,
      textCancelAction: undefined,
    });
  }

  sendTextCancelAction(action: text.TextCancelAction) {
    const userId = useStore.getState().canvasState.userId;
    this.userActionStream.next({
      userId,
      type: text.ActionType.TEXT_CANCEL,
      newInputAction: undefined,
      textTypingAction: undefined,
      textSaveAction: undefined,
      textCancelAction: action,
    });
  }
}

export const grpcService = new GrpcService();
