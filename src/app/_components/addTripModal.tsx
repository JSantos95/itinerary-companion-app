import { ChangeEvent, useState } from "react";
import { addNewEvent } from "~/server/db";

export default function AddTripModal({ id, disableATPopup }: any) {
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [errorLog, setErrorLog] = useState('');

    const sumbitNewTrip = async () => {
        if (destination == '' || startDate == '' || endDate == '') {
            setErrorLog("Required field cannot be empty");
        } else if (startDate < endDate) {
            setErrorLog("Invaild dates selected");
        } else {
            //make query
            await addNewEvent(id, destination, startDate, endDate);
            disableATPopup();
        }
    }

    const handleSDChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (endDate !== '' || endDate !== null) {
            if (e.target.value > endDate) {
                //clear endDate if startDate is after it
                setEndDate('');
                setStartDate(e.target.value);
            } else {
                setStartDate(e.target.value);
            }
        }
    }

    const handleEDChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (startDate !== '' || startDate !== null) {
            if (e.target.value < startDate) {
                //don't update endDate if startDate is after it
                setEndDate('');
            } else {
                setEndDate(e.target.value);
            }
        }
    }

    return (
        <div id="authentication-modal" tabIndex={-1} aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-50% right-0 left-50% z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Add a new Trip or Event
                        </h3>
                        <button type="button" onClick={disableATPopup} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only" >Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                            <div>
                                <label htmlFor="destination" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Destination</label>
                                <input type="text" name="destination" id="destination" value={destination} onChange={e => setDestination(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Tokyo, Japan" required />
                            </div>
                            <div>
                                <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start date</label>
                                <input type="date" name="startDate" id="startDate" value={startDate} onChange={(e) => handleSDChange(e)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required />
                            </div>
                            <div>
                                <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End date</label>
                                <input type="date" name="endDate" id="endDate" value={endDate} onChange={e => handleEDChange(e)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required />
                            </div>
                            {errorLog !== "" &&
                                <div className="block mb-2 text-sm font-medium text-red-700 dark:text-red-400">{errorLog}</div>
                            }
                            <button type="submit" onClick={sumbitNewTrip} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Create New Trip
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}