import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { install } from 'source-map-support';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import path from 'path';
import { config } from './config';

install();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: [path.join(__dirname, '../../../libs/model/src/proto/text.proto')],
      url: `0.0.0.0:${config.grpcPort}`,
    },
  });

  await app.startAllMicroservices();
  await app.listen(config.httpPort);
}
bootstrap();
