import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loadEnvironmentVariables } from './loader';
import MainModule from './main.module';

const bootstrap = async () => {
  await loadEnvironmentVariables();
  console.log(process.env.TYPEORM_CONNECTION);
  const app = await NestFactory.create(MainModule);
  await app.listen(3000);
};

bootstrap();