"use client"
import { useAuth } from "@clerk/nextjs";

export default function UserHomePage() {
    const { isLoaded, userId } = useAuth();

    // In case the user signs out while on the page.
    if (!isLoaded || !userId) {
        return null;
    }

    return (
        <div>
            <div id="trips" className="flex justify-between">
                <h2>Trips</h2>
                <button>Add Trip</button>
            </div>
            { }
        </div>
    );
}