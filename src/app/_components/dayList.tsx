import { FC, useEffect, useState } from "react";
import { TravelDay } from "../utilities/types";
import { getEventDays } from "~/server/db";

interface Props {
    eventId: string;
}

export const DayList: FC<Props> = ({ eventId }) => {
    const [dayList, setDayList] = useState<Array<TravelDay>>();

    useEffect(() => {
        const getActs = async () => {
            const dbFeedback = await getEventDays(parseInt(eventId));
            //setDayList(dbFeedback);
        }
        getActs();
    }, [])


    return (
        <div className="mb-3">

        </div>
    )
}