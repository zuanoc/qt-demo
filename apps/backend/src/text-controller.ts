import { Controller } from '@nestjs/common';
import { GrpcStreamMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';
import { merge, Observable, of } from 'rxjs';
import { text } from '@qt-demo/model';
import { SessionManager } from './session-manager';

@Controller()
export class TextController {
  constructor(private sessionManager: SessionManager) {}

  @GrpcStreamMethod('TextService', 'connection')
  connection(
    messages: Observable<text.UserAction>,
    metadata: Metadata,
  ): Observable<text.UserAction> {
    const userId: string = metadata.get('userId')[0] as string;
    this.sessionManager.registerSession({
      userId,
      inputStream: messages,
    });

    return merge(
      of<text.UserAction>({
        userId: '',
        type: text.ActionType.FETCH_ALL,
        fetchAllAction: {
          texts: [...this.sessionManager.textMap.values()],
        },
      }),
      this.sessionManager.actionStream,
    );
  }
}
