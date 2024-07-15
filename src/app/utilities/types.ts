export type Event = {
    id: number,
    userId: string,
    destination: string,
    startDate: Date,
    endDate: Date,
    travelers: JSON | null,
}

export type TravelDay = {
    id: string,
    eventId: string,
    day: Date,
    morning: JSON | null,
    afternoon: JSON | null,
    evening: JSON | null,
}

export type Activity = {
    id: string,
    eventId: string,
    name: string,
    type: string,
    location: string | null,
    notes: string | null,
}