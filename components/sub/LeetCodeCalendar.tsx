"use client";
import React from "react";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";

const LeetCodeCalendar = () => {
    // const months = [
    //     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    //     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    // ];

    // // Mock activity levels (0-4) for each month
    // const monthlyActivity = [
    //     2, 4, 1, 3, 2, 4,
    //     3, 1, 2, 4, 3, 2
    // ];

    // const getMonthColor = (level: number) => {
    //     switch (level) {
    //         case 0: return "bg-gray-800";
    //         case 1: return "bg-yellow-900";
    //         case 2: return "bg-yellow-700";
    //         case 3: return "bg-yellow-500";
    //         case 4: return "bg-yellow-300";
    //         default: return "bg-gray-800";
    //     }
    // };

    return (
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                DSA Contributions
            </h2>
            {/* <div className="flex flex-wrap flex-row gap-4 justify-center items-center w-full px-4">
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
            </div> */}
            {/* Platform Icons */}
            {/* Platform Cards */}
            <div className="flex flex-col md:flex-row gap-8 mt-6 w-full justify-center px-4">
                {[
                    {
                        name: "LeetCode",
                        icon: SiLeetcode,
                        color: "#FFA116",
                        link: "https://leetcode.com/u/maraheem/"
                    },
                    {
                        name: "Codeforces",
                        icon: SiCodeforces,
                        color: "#1F8ACB",
                        link: "https://codeforces.com/profile/maraheem812"
                    },
                    {
                        name: "CodeChef",
                        icon: SiCodechef,
                        color: "#5B4638",
                        link: "https://www.codechef.com/users/maraheem812"
                    },
                ].map((platform) => (
                    <motion.a
                        key={platform.name}
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-4 w-full md:w-[200px] h-[150px] bg-[#030014]/50 border border-[#2A0E61] rounded-xl cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <platform.icon
                            size={40}
                            style={{ color: platform.color }}
                            className="transition-all duration-300"
                        />
                        <span className="text-gray-200 font-semibold text-lg">{platform.name}</span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default LeetCodeCalendar;
