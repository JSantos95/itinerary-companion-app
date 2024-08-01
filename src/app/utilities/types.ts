export type Event = {
    id: number,
    userid: string,
    destination: string,
    startDate: string,
    endDate: string,
    updatedAt: Date | null,
    createdAt: Date,
}

export type TravelDay = {
    id: number,
    eventId: number,
    day: string,
    updatedAt: Date | null;
    createdAt: Date,
}

export type Activity = {
    id: number,
    eventId: number,
    name: string,
    type: string,
    location: string | null,
    notes: string | null,
    updatedAt: Date | null;
    createdAt: Date,
}

export type DayActivity = {
    id: number,
    day: number,
    dayPeriod: string,
    activity: number,
    updatedAt: Date | null;
    createdAt: Date,
}