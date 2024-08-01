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
            if (dbFeedback != null) {
                setDayList(dbFeedback);
            }
        }
        getActs();
    }, [])

    const dayz = dayList?.map((d, index) => <Day {...d} index={index} key={index} />);
    return (
        <div className="mb-3">
            {dayz}
        </div>
    )
}

type DayProp = TravelDay & { index: number };

const Day: FC<DayProp> = ({ day, index }) => {
    return (
        <div className="min-h-40">
            <div className="text-2xl p-2 mb-2 w-full bg-blue-300 rounded-lg">
                Day {index + 1}: {day.slice(5)}
            </div>
            <div className="min-h-20">
                <div className="text-xl">Morning</div>
            </div>
            <div className="min-h-20">
                <div className="text-xl">Afternoon</div>
            </div>
            <div className="min-h-20">
                <div className="text-xl">Evening</div>
            </div>
        </div>
    )
}