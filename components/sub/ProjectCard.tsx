import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  LiveLink: string;
  DemoLink: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  LiveLink,
  DemoLink,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
  <Image
    src={src}
    alt={title}
    width={1000}
    height={1000}
    className="w-full object-contain"
  />

  <div className="relative p-4">
    <h1 className="text-2xl font-semibold text-white">{title}</h1>
    <p className="mt-2 text-gray-300">{description}</p>

    {/* Wrapper for buttons */}
    <div className="flex justify-center relative z-[20] gap-4 mt-4">
      <a
        href={LiveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#2A0E61] px-4 py-2 rounded-lg text-white cursor-pointer"
      >
        Live
      </a>
      <a
        href={DemoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#2A0E61] px-4 py-2 rounded-lg text-white cursor-pointer"
      >
        Code
      </a>
    </div>
  </div>
</div>
  );
};

export default ProjectCard;
