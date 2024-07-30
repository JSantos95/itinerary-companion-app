"use client"
import { useAuth } from "@clerk/nextjs";
import { useCallback, useEffect, useState } from "react";
import AddTripModal from "./addTripModal";
import { getAllUserEvents } from "~/server/db";
import { TripCard } from "./cards/tripCard";
import { Event } from "../utilities/types";

export default function UserHomePage() {
    const { isLoaded, userId } = useAuth();
    const [showATPopup, setShowATPopup] = useState(false);
    const [userData, setUserData] = useState<Array<Event>>();

    useEffect(() => {
        async function getUserTrips() {
            console.log(userId);
            if (isLoaded && userId != null) {
                const dbFeedback = await getAllUserEvents(userId);
                setUserData(dbFeedback);
            }
        }
        if (isLoaded && userId != null) {
            getUserTrips();
        }
    }, []);

    // In case the user signs out while on the page.
    if (!isLoaded || !userId) {
        return null;
    }

    const disableATPopup = useCallback(() => {
        setShowATPopup(false);
    }, [showATPopup]);

    const listOfUserTrips = userData?.map(userTrip => <TripCard {...userTrip} />);
    return (
        <div>
            <div className="w-9/12 mx-auto pt-8">
                <div id="trips" className="flex pb-2 mb-4 justify-between items-center border-b-2 border-black">
                    <h2 className="text-xl font-bold">Trips</h2>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full" onClick={() => setShowATPopup(true)}>+</button>
                </div>
                {listOfUserTrips}
            </div>
            {showATPopup && <AddTripModal id={userId} disableATPopup={disableATPopup} />}
        </div>

    );
}