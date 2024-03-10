import { type Config } from 'drizzle-kit';

export default {
  schema: './drizzle/schemas/*',
  out: './drizzle/migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL || 'file:local.db',
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
} satisfies Config;
