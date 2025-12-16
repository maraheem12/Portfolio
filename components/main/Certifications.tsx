import React from "react";
import CertificationCard from "../sub/CertificationCard";

const Certifications = () => {
    // Placeholder data
    const certs = [
        {
            title: "Oracle OCI Certified DevOps Professional 2025",
            src: "/certificate1.jpg",
            description: "Expertise in OCI DevOps CI/CD pipelines and infrastructure.",
            link: "https://drive.google.com/file/d/1Ee-oMzUBvl0Ci8Huu4_42SKydi1hEw6H/view"
        },
        {
            title: "Frontend Developer (React) Certificate",
            src: "/certificate2.jpg", // Placeholder
            description: "Proficiency in building responsive, scalable user interfaces using React and modern frontend practices..",
            link: "https://drive.google.com/file/d/1urtciqanM01WMmIO_q_Uas-J6J9hHe7k/view"
        },
        {
            title: "Career Essentials in GitHub Professional Certification",
            src: "/certificate3.jpg", // Placeholder
            description: "Strong understanding of GitHub workflows, version control, collaboration, and open-source best practices.",
            link: "https://drive.google.com/file/d/1O8Ee5ebtaUiBDrxyUPh_r6Y4LdCcWgzF/view"
        },
        {
            title: "Docker Foundations Professional Certification",
            src: "/certificate4.jpg", // Placeholder
            description: "Fundamental knowledge of containerization, Docker images, containers, and deployment workflows.",
            link: "https://drive.google.com/file/d/1CjaEQeXvO-z1byVAuxHlL7A7Ou3oUdoS/view"
        },
        {
            title: "Atlassian Agile Project Management Professional Certification",
            src: "/certificate5.jpg", // Placeholder
            description: "Practical skills in Agile methodologies, Jira tools, sprint planning, and project tracking.",
            link: "https://drive.google.com/file/d/17ZFFnssBRu35ZdziUGpZxdu99lmbfr8k/view"
        },
        {
            title: "Python for Data Science NPTEL Certification",
            src: "/certificate6.jpg", // Placeholder
            description: "Applied Python skills for data analysis, visualization, and basic machine learning concepts.",
            link: "https://drive.google.com/file/d/1lhX1hzF1Kt2Ki3RMvHBjleFpn9yW3Ww2/view"
        },
        {
            title: "MongoDB Certification",
            src: "/certificate7.jpg", // Placeholder
            description: "Expertise in NoSQL database design, CRUD operations, indexing, and performance optimization.",
            link: "https://drive.google.com/file/d/1hcHgL7u2XPoOdkrW-HiJUZqPW7gH7W9d/view"
        },
        {
            title: "Generative AI Certification",
            src: "/certificate8.jpg", // Placeholder
            description: "Foundational knowledge of generative AI models, prompt engineering, and real-world AI applications.",
            link: "https://drive.google.com/file/d/1ApekWgUTxBcwzjksbb-Kyt-HsZ6h74IF/view"
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
                        link={cert.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Certifications;
