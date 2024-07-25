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
            {/* Heading */}
            <div className="text-5xl font-extrabold pb-3">
                {searchParams.get("destination")}
            </div>
            <div className="text-lg text-gray-800 pb-5">
                {searchParams.get("startDate")} to {searchParams.get("endDate")}
            </div>
            <div className="flex flex-row gap-y-4 grid-rows-2">
                {/* Trip's days */}
                <div className="w-full">
                    <div className="text-xl font-bold">Days Initerary</div>

                </div>
                {/* Activities List */}
                <div id="trips" className="flex w-full pb-2 mb-4 justify-between items-center border-b-2 border-black">
                    <h2 className="text-xl font-bold">Activities</h2>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full" onClick={() => setShowAAPopup(true)}>+</button>
                </div>
            </div>
            {/* Add New Activity Modal */}
            {showAAPopup && <AddActivityModal id={searchParams.get("userid")} disableATPopup={disableATPopup} />}
        </div>
    )
}