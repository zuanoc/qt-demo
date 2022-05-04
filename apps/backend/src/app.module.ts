import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config';
import { TextController } from './text-controller';
import { SessionManager } from './session-manager';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => config],
    }),
  ],
  controllers: [AppController, TextController],
  providers: [AppService, SessionManager],
})
export class AppModule {}
