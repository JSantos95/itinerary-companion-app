import { FC } from "react";
import { Event } from "../utilities/types";
import Link from "next/link";

export const Trip: FC<Event> = ({ userid, destination, startDate, endDate, id }) => {

    return (
        <div className="mb-3">
            <Link href={{ pathname: "/event/" + id, query: { userid, destination, startDate, endDate, id } }}
                className="block max-w-sm p-6 bg-white border border-blue-200 rounded-lg shadow hover:bg-blue-100 dark:bg-blue-600 dark:border-blue-600 dark:hover:bg-blue-800">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {destination}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {startDate.slice(5)} - {endDate.slice(5)}
                </p>
            </Link>
        </div>
    )
}