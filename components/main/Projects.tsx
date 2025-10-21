import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/careerflow.PNG"
          title="CareerFlow – MERN Stack Job Application Platform"
          LiveLink="https://career-flow-black.vercel.app/"
          DemoLink="https://github.com/maraheem12/CareerFlow"
          description="A MERN stack job application platform enabling seamless interaction between recruiters and candidates with secure authentication and optimized performance."
        />
        <ProjectCard
          src="/magnus.PNG"
          title="E-Commerce Store"
          LiveLink="https://magnus-lm3d.onrender.com/"
          DemoLink="https://github.com/maraheem12/Portfolio"
          description="A modern online store with smooth product browsing, secure checkout, and responsive design.
Built with scalable architecture to handle real-world transactions efficiently."
        />
        <ProjectCard
          src="/Portfolio.PNG"
          title="Portfolio Website"
          LiveLink="https://maraheem.vercel.app/"
          DemoLink="https://github.com/maraheem12/Portfolio"
          description="A sleek, interactive portfolio showcasing projects, skills, and achievements.
Optimized for performance and designed to leave a lasting impression."
        />
      </div>
    </div>
  );
};

export default Projects;
