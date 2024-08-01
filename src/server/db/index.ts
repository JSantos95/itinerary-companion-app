"use server"
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";
import * as schema from './schema';
import { eq } from 'drizzle-orm';
import { Event } from '~/app/utilities/types';

// Use this object to send drizzle queries to your DB
const db = drizzle(sql, { schema });

//USERS
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

//EVENT
export const getAllUserEvents = async (id: string) => {
    return await db.select()
        .from(schema.events)
        .where(eq(schema.events.userid, id));
}

export const addNewEvent = async (userid: string, destination: string, startDate: string, endDate: string) => {
    const newEvent = await db.insert(schema.events).values({
        userid,
        destination,
        startDate,
        endDate,
    }).returning({
        id: schema.events.id
    })

    //create the days for this event
    const newId = newEvent[0]?.id;
    if (newId != null) {
        let date1 = new Date(startDate);
        let date2 = new Date(endDate);
        let thisDate = new Date(startDate);

        const diffInTime = date2.getTime() - date1.getTime();
        const diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));

        for (let index = 1; index < diffInDays + 2; index++) {
            thisDate.setDate(date1.getDate() + index);
            await addNewEventDay(newId, thisDate.toDateString());
        }
    }
}

export const removeEvent = async (eventId: number) => {
    await db.delete(schema.events)
        .where(eq(schema.events.id, eventId))
}

//DAY
export const getEventDays = async (eId: number) => {
    return await db.select()
        .from(schema.travelDays)
        .where(eq(schema.travelDays.eventId, eId));
}

export const addNewEventDay = async (eId: number, date: string) => {
    await db.insert(schema.travelDays).values({
        eventId: eId,
        day: date,
    });
}

//ACTIVITY
export const getEventActivities = async (eId: number) => {
    return await db.select()
        .from(schema.activities)
        .where(eq(schema.activities.eventId, eId));
}

export const addNewActivities = async (eventId: number, name: string, type: string, location?: string, notes?: string) => {
    await db.insert(schema.activities).values({
        eventId,
        name,
        type,
        location,
        notes,
    });
}