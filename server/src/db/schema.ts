import { serial, text, pgTable, timestamp, numeric, pgEnum } from 'drizzle-orm/pg-core';

// Define enum for computer condition
export const computerConditionEnum = pgEnum('computer_condition', ['new', 'used', 'for_parts']);

export const computerListingsTable = pgTable('computer_listings', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  condition: computerConditionEnum('condition').notNull(),
  seller_contact: text('seller_contact').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// TypeScript types for the table schema
export type ComputerListing = typeof computerListingsTable.$inferSelect;
export type NewComputerListing = typeof computerListingsTable.$inferInsert;

// Important: Export all tables for proper query building
export const tables = { computerListings: computerListingsTable };