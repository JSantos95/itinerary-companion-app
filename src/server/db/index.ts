import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";
import * as schema from './schema';
import { eq } from 'drizzle-orm';

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql, { schema });

export const getAllUserEvent = async (id: string) => {
    return await db.select()
        .from(schema.events)
        .where(eq(schema.events.userid, id));
}

export const addNewEvent = async (id: string, destination: string, startDate: string, endDate: string, travelers: string) => {
    await db.insert(schema.events).values({
        userid: id,
        destination,
        startDate,
        endDate,
        travelers,
    });
}