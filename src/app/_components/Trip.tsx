import { ChangeEvent, FC, useState } from "react";
import { Event } from "../utilities/types";

export const Trip: FC<Event> = (props) => {

    return (
        <div className="mb-3">
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.destination}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {props.startDate.slice(5)} - {props.endDate.slice(5)}
                </p>
            </a>
        </div>
    )
}