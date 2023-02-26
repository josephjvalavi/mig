import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
export default new DataSource({
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  // port: +process.env.PORT,
  synchronize: false,
  logging: false,
  entities: ['./src/entities/*.entity.ts'],
  migrations: ['migrations/*.ts'],
});
