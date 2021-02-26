import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Honeybadger from '@honeybadger-io/js';

Honeybadger.configure({
  apiKey: process.env.HONEYBADGER_API_KEY || '',
  environment: process.env.NODE_ENV || 'development',
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(Honeybadger.requestHandler);
  await app.listen(3000);
  app.use(Honeybadger.errorHandler);
}
bootstrap();
