import {config} from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { ConnectionOptionsEnvReader } from 'typeorm/connection/options-reader/ConnectionOptionsEnvReader';

export const loadEnvironmentVariables = async () => {
  config();
}

export const loadTypeOrmConnectionFromEnv = (): TypeOrmModuleOptions => {
  const envReader = new  ConnectionOptionsEnvReader();
  const connectionOption: TypeOrmModuleOptions = {
    ...envReader.read(),
    entities: [`${__dirname}/${process.env.TYPEORM_ENTITIES}`],
    migrations: []
  }
  console.log(connectionOption);
  return connectionOption;
}