import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Something, SomethingType } from 'my-common-package';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const something: SomethingType = new Something();

  console.log(something.commonThing);
}
bootstrap();
