import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { MyObj } from 'foo';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  console.log(MyObj);
}
bootstrap();
