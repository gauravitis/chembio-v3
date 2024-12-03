import { drizzle } from 'drizzle-orm/neon-http';
import { neon, neonConfig } from '@neondatabase/serverless';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import * as dotenv from 'dotenv';

dotenv.config();

const runMigration = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
  }

  neonConfig.fetchConnectionCache = true;
  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql);

  console.log('⏳ Running migrations...');
  
  const start = Date.now();
  await migrate(db, { migrationsFolder: 'drizzle' });
  const end = Date.now();

  console.log(`✅ Migrations completed in ${end - start}ms`);
  process.exit(0);
};

runMigration().catch((err) => {
  console.error('❌ Migration failed');
  console.error(err);
  process.exit(1);
});
