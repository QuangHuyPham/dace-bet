import 'dotenv/config';
import { Users } from 'src/users/users.model';
import { Bets } from 'src/bet/bet.model';


const database = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_DB,
  entities: [Users, Bets],
  synchronize: true,
};

const DatabaseConfig = () => ({ ...database });

export = DatabaseConfig;
