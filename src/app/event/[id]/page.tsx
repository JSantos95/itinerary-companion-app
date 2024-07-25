"use client";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import AddActivityModal from "~/app/_components/addActivityModal";

export default function EventDetailPage({ params, query }: { params: { id: string }, query: { userid: string, destination: string, startDate: string, endDate: string, id: number } }) {
    const [showAAPopup, setShowAAPopup] = useState(false);
    const searchParams = useSearchParams();

    const disableATPopup = useCallback(() => {
        setShowAAPopup(false);
    }, [showAAPopup]);

    return (
        <div className="w-9/12 mx-auto pt-8">
            <div id="trips" className="flex pb-2 mb-4 justify-between items-center border-b-2 border-black">
                <h2 className="text-xl font-bold">Trips</h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full" onClick={() => setShowAAPopup(true)}>+</button>
            </div>
            <div className="text-lg">
                This event id is {params.id}
                <div className="">Morning</div>
            </div>
            {showAAPopup && <AddActivityModal id={searchParams.get("userid")} disableATPopup={disableATPopup} />}
        </div>
    )
}