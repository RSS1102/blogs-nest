import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
// 管道验证ValidationPipe https://juejin.cn/post/7055314455868997646
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3003);
  console.log('http://localhost:3003/');
}
bootstrap();
