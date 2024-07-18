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
    id: string,
    eventId: string,
    day: Date,
    morning: JSON | null,
    afternoon: JSON | null,
    evening: JSON | null,
    updatedAt: Date | null;
    createdAt: Date,
}

export type Activity = {
    id: string,
    eventId: string,
    name: string,
    type: string,
    location: string | null,
    notes: string | null,
    updatedAt: Date | null;
    createdAt: Date,
}