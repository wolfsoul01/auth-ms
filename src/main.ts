import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { envs } from './envs/env';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors({ origin: '*' });
  
  const config = new DocumentBuilder()
    .setTitle('Auth-Ms Doc')
    .setDescription('Documentación api auth')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/doc', app, document);

  await app.listen(envs.PORT);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
