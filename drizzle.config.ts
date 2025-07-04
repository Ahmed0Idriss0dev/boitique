import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL! ?? 'postgresql://postgres.oaxgeriziyjxqjrgluob:OBOpciH2arQucVhj@aws-0-eu-west-3.pooler.supabase.com:6543/postgres',
  },
});
