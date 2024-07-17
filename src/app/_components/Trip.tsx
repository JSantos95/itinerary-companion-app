import { ChangeEvent, FC, useState } from "react";
import { Event } from "../utilities/types";

export const Trip: FC<Event> = (props) => {

    return (
        <div>
            <h4>
                {props.destination}
            </h4>
            <p>
                {props.startDate.toString()} to {props.startDate.toString()}
            </p>
        </div>
    )
}