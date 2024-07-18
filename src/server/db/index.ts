"use server"
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";
import * as schema from './schema';
import { eq } from 'drizzle-orm';
import { Event } from '~/app/utilities/types';

// Use this object to send drizzle queries to your DB
const db = drizzle(sql, { schema });

export const getAllUserData = async (id: string) => {
    return await db.select()
        .from(schema.users)
        .where(eq(schema.events.userid, id));
}

export const addNewUser = async (id: string, city?: string) => {
    await db.insert(schema.users).values({
        userId: id,
        city,
    });
}

export const getAllUserEvents = async (id: string) => {
    return await db.select()
        .from(schema.events)
        .where(eq(schema.events.userid, id));
}

export const addNewEvent = async (id: string, destination: string, startDate: string, endDate: string) => {
    await db.insert(schema.events).values({
        userid: id,
        destination,
        startDate,
        endDate,
    });
}