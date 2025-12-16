"use client";
import React from "react";

const LeetCodeCalendar = () => {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Mock activity levels (0-4) for each month
    const monthlyActivity = [
        2, 4, 1, 3, 2, 4,
        3, 1, 2, 4, 3, 2
    ];

    const getMonthColor = (level: number) => {
        switch (level) {
            case 0: return "bg-gray-800";
            case 1: return "bg-yellow-900";
            case 2: return "bg-yellow-700";
            case 3: return "bg-yellow-500";
            case 4: return "bg-yellow-300";
            default: return "bg-gray-800";
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                DSA Contributions
            </h2>
            <div className="flex flex-wrap flex-row gap-4 justify-center items-center w-full px-4">
                {months.map((month, index) => (
                    <div key={month} className="flex flex-col items-center gap-2 group">
                        <div
                            className={`w-16 h-16 ${getMonthColor(monthlyActivity[index])} rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-orange-500/50`}
                        >
                            <span className="text-black font-bold text-lg opacity-70 group-hover:opacity-100">{monthlyActivity[index] * 15}+</span>
                        </div>
                        <span className="text-gray-300 font-medium">{month}</span>
                    </div>
                ))}
            </div>
            <a
                href="https://leetcode.com/u/maraheem/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors mt-2"
            >
                View LeetCode Profile
            </a>
        </div>
    );
};

export default LeetCodeCalendar;
