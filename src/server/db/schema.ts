// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  date,
  index,
  json,
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `itinerary-companion-app_${name}`);

export const users = createTable(
  "user",
  {
    userId: varchar("userId", { length: 256 }).primaryKey(),
    city: varchar("city", { length: 256 }),

    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.userId),
  })
);

export const events = createTable(
  "event",
  {
    id: serial("id").primaryKey(),
    userid: varchar("userId", { length: 256 }).references(() => users.userId),
    destination: varchar("destination", { length: 256 }),
    startDate: date("startDate"),
    endDate: date("endDate"),
    travelers: json("travelers"),

    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.destination),
  })
);

export const travelDays = createTable(
  "travelDay",
  {
    id: serial("id").primaryKey(),
    eventId: serial("id").references(() => events.id),
    day: date("day"),
    morning: json("morning"),
    afternoon: json("afternoon"),
    evening: json("evening"),

    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.day),
  })
);

export const activies = createTable(
  "activity",
  {
    id: serial("id").primaryKey(),
    eventId: serial("id").references(() => events.id),
    name: varchar("name", { length: 256 }),
    type: varchar("type", { length: 256 }),
    location: varchar("location", { length: 256 }),
    notes: text("notes"),

    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);