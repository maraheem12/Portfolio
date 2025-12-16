import React from "react";
import CertificationCard from "../sub/CertificationCard";

const Certifications = () => {
    // Placeholder data
    const certs = [
        {
            title: "Full Stack Developer",
            src: "/NextWebsite.png", // Using an existing image as placeholder
            description: "Mastery in MERN stack and Next.js development."
        },
        {
            title: "Cloud Architect",
            src: "/SpaceWebsite.png", // Placeholder
            description: "Designing scalable cloud infrastructure on AWS."
        },
        {
            title: "Data Structures",
            src: "/CardImage.png", // Placeholder
            description: "Advanced algorithms and problem solving capabilities."
        }
    ];

    return (
        <section
            id="certifications"
            className="flex flex-col items-center justify-center gap-20 h-full relative overflow-hidden py-20 z-20"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Certifications
            </h1>
            <div className="h-full w-full flex flex-row flex-wrap justify-center gap-10 px-10">
                {certs.map((cert, index) => (
                    <CertificationCard
                        key={index}
                        title={cert.title}
                        src={cert.src}
                        description={cert.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Certifications;
