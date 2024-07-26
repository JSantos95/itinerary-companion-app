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
        console.log(newId);
        let date1 = new Date(startDate);
        let date2 = new Date(endDate);
        let thisDate = date1;

        const diffInTime = date2.getTime() - date1.getTime();
        const diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));

        for (let index = 0; index < diffInDays; index++) {
            thisDate.setDate(date1.getDate() + index);
            await addNewEventDay(newId, thisDate.toDateString());
        }
    }
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
export const getEventActivies = async (eId: number) => {
    return await db.select()
        .from(schema.activies)
        .where(eq(schema.activies.eventId, eId));
}

export const addNewActivies = async (eventId: number, name: string, type: string, location?: string, notes?: string) => {
    await db.insert(schema.activies).values({
        eventId,
        name,
        type,
        location,
        notes,
    });
}