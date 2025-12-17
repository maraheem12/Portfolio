"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-30 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Turning ideas into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              impactful{" "}
            </span>
            project experiences.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r  to-cyan-500 from-purple-500 ">Mohammed Abdul Raheem</span>, a motivated Full Stack Software Engineer passionate about building scalable, user-centric web and software solutions. Explore my projects and technical expertise.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-5">

          <motion.a
            href="https://hashnode.com/@maraheem812"
            target="_blank"
            rel="noopener noreferrer"
            variants={slideInFromLeft(1)}
            className="py-2 px-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Blogs
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1w24bn7Fj5PsLd1F0QNFBg9pwl_pN4FrJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variants={slideInFromLeft(1)}
            className="py-2 px-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Resume
          </motion.a>
        </div>

      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          //src="/mainIconsdark.svg"
          src="/anime.jpg"
          alt="work icons"
          height={500}
          width={500}
          className="rounded-full"


        // src="/linkedin.jpg"
        // alt="work icons"
        // height={650}
        // width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
