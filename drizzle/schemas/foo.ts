import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core';

export const foo = sqliteTable('foo', {
  id: int('id').notNull().primaryKey(),
  bar: text('bar').notNull().default('baz'),
});
