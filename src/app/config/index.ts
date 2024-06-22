import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_password: process.env.DEFAULT_PASS,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
};
