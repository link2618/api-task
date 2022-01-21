import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExeptionFilter } from './common/filters/http-exeption.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // validacion global para todas las rutas
  app.useGlobalFilters(new AllExeptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor())
  await app.listen(4000);
}
bootstrap();
