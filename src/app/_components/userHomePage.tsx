"use client"
import { useAuth } from "@clerk/nextjs";
import { useCallback, useEffect, useState } from "react";
import AddTripModal from "./addTripModal";
import { getAllUserEvents } from "~/server/db";
import { Trip } from "./Trip";
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

    console.log(userData);
    const listOfUserTrips = userData?.map(userTrip => <Trip {...userTrip} />);
    return (
        <div>
            <div id="trips" className="flex justify-between">
                <h2 className="">Trips</h2>
                <button onClick={() => setShowATPopup(true)}>+ Add Trip</button>
            </div>
            {showATPopup && <AddTripModal id={userId} disableATPopup={disableATPopup} />}
            {listOfUserTrips}
        </div>
    );
}