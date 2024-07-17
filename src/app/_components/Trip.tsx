import { ChangeEvent, FC, useState } from "react";
import { Event } from "../utilities/types";

export const Trip: FC<Event> = (trip: Event) => {

    return (
        <div>
            <h4>
                {trip.destination}
            </h4>
            <p>
                {trip.startDate.toString()} to {trip.startDate.toString()}
            </p>
        </div>
    )
}