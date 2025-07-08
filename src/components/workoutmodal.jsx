import React, { useState } from "react";

export default function WorkoutModal({
    showModal = false,
    setShowModal = () => { },
}) {
    const [type, setType] = useState("");
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleSave = () => {
        const h = parseInt(hours) || 0;
        const m = parseInt(minutes) || 0;
        const s = parseInt(seconds) || 0;

        const totalHours = h + m / 60 + s / 3600;

        const newWorkout = {
            type,
            time: { hours: h, minutes: m, seconds: s },
            totalHours: parseFloat(totalHours.toFixed(2))  // e.g., 1.75 hours
        };

        const existing = JSON.parse(localStorage.getItem("workouts")) || [];
        existing.push(newWorkout);
        localStorage.setItem("workouts", JSON.stringify(existing));

        setShowModal(false);
        setType("");
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white shadow-2xl p-6 rounded-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Add Workout</h2>

                        <div className="mb-3">
                            <label className="block mb-1 text-sm">Workout Type</label>
                            <input
                                type="text"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full border px-2 py-1 rounded focus:border-gray-400 focus-visible:border-orange-500"
                            />
                        </div>

                        <div className="flex space-x-2 mb-4">
                            <div>
                                <label className="block mb-1 text-sm">Hours</label>
                                <input
                                    type="number"
                                    value={hours}
                                    onChange={(e) => setHours(e.target.value)}
                                    className="w-full border px-2 py-1 rounded focus:border-gray-400 focus-visible:border-orange-500"
                                    min="0"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm">Minutes</label>
                                <input
                                    type="number"
                                    value={minutes}
                                    onChange={(e) => setMinutes(e.target.value)}
                                    className="w-full border px-2 py-1 rounded focus:border-gray-400 focus-visible:border-orange-500"
                                    min="0"
                                    max="59"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm">Seconds</label>
                                <input
                                    type="number"
                                    value={seconds}
                                    onChange={(e) => setSeconds(e.target.value)}
                                    className="w-full border px-2 py-1 rounded focus:border-gray-400 focus-visible:border-orange-500"
                                    min="0"
                                    max="59"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
