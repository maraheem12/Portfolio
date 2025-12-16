"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues and potential module resolution problems
const Calendar = dynamic(async () => {
    const mod = await import("react-github-calendar");
    // Defensive return for named or default exports
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = (mod as any).default || (mod as any).GitHubCalendar || Object.values(mod).find(exp => typeof exp === 'function');
    if (!Component) {
        const ErrorComponent = () => <p className="text-white">Could not load GitHub stats</p>;
        ErrorComponent.displayName = 'ErrorComponent';
        return ErrorComponent;
    }
    return Component;
}, {
    ssr: false,
    loading: () => <p className="text-white">Loading GitHub stats...</p>
});

const GitHubCalendar = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 w-full">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                GitHub Stats
            </h2>
            <div className="flex justify-center items-center w-full md:max-w-6xl bg-[#030014]/50 p-4 md:p-6 rounded-xl border border-[#2A0E61] backdrop-blur-sm overflow-hidden transform scale-90 md:scale-100 origin-center transition-transform duration-300">
                <Calendar
                    username="maraheem12"
                    colorScheme="dark"
                    style={{ color: "#ffffff" }}
                    blockSize={15}
                    blockMargin={5}
                    fontSize={16}
                    theme={{
                        dark: [
                            "#161B22", // Level 0
                            "#0E4429", // Level 1
                            "#006D32", // Level 2
                            "#26A641", // Level 3
                            "#39D353", // Level 4
                        ],
                    }}
                />
            </div>
            <a
                href="https://github.com/maraheem12/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors mt-2"
            >
                View GitHub Profile
            </a>
        </div>
    );
};

export default GitHubCalendar;
