import 'dotenv/config';

export default {
  schema: './src/models/*.js',
  dialect: 'postgresql',
  dbCredentials: {
    utl: process.env.DATABASE_URL,
  }
};