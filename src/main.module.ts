import { Module } from '@nestjs/common';
import { AppModule } from './app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { loadTypeOrmConnectionFromEnv } from './loader';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return loadTypeOrmConnectionFromEnv();
      }
    }),
    AppModule
  ]
})
export default class MainModule {

}