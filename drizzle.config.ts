import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}

export default {
  schema: './src/db/schema/*',
  out: './drizzle',
  driver: 'postgres',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
} satisfies Config;
