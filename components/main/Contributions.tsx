import React from "react";
import GitHubCalendar from "../sub/GitHubCalendar";
import LeetCodeCalendar from "../sub/LeetCodeCalendar";

const Contributions = () => {
    return (
        <section
            id="contributions"
            className="flex flex-col items-center justify-center gap-10 h-full relative overflow-hidden py-20 z-20"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                My Contributions
            </h1>

            <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 px-10">
                <GitHubCalendar />
                <LeetCodeCalendar />
            </div>
        </section>
    );
};

export default Contributions;
