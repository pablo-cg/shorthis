import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

export function useDb() {
  const { turso } = useRuntimeConfig();

  const tursoClient = createClient({
    url: turso.databaseUrl,
    authToken: turso.authToken,
  });

  return drizzle(tursoClient);
}
