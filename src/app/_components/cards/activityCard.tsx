import { FC } from "react";
import { Activity as ActivityProps } from "../../utilities/types";
import Link from "next/link";

export const ActivityCard: FC<ActivityProps> = ({ id, eventId, name, type, location, notes }) => {

    return (
        <div className="mb-3">
            <Link href={{ pathname: "/activity/" + id, query: { id, eventId, name, type, location, notes } }}
                className="block max-w-sm p-6 bg-white border border-blue-200 rounded-lg shadow hover:bg-blue-100 dark:bg-blue-600 dark:border-blue-600 dark:hover:bg-blue-800">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {type}
                </p>
            </Link>
        </div>
    )
}