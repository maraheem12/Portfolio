"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo Section */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[20px] text-2xl hidden md:block text-gray-300">
            M A Raheem
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[600px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-white transition-colors">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contributions" className="cursor-pointer hover:text-white transition-colors">
              Contributions
            </a>
            <a href="#certifications" className="cursor-pointer hover:text-white transition-colors">
              Certifications
            </a>
          </div>
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={40}
                height={40}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-200 hover:text-white focus:outline-none">
            {isMenuOpen ? <RxCross2 size={30} /> : <RxHamburgerMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[65px] left-0 w-full bg-[#030014] border-b border-[#2A0E61] shadow-xl md:hidden flex flex-col items-center py-10 gap-6 z-40"
          >
            <a href="#about-me" onClick={toggleMenu} className="text-xl text-gray-200 hover:text-cyan-400 cursor-pointer">
              About me
            </a>
            <a href="#skills" onClick={toggleMenu} className="text-xl text-gray-200 hover:text-cyan-400 cursor-pointer">
              Skills
            </a>
            <a href="#projects" onClick={toggleMenu} className="text-xl text-gray-200 hover:text-cyan-400 cursor-pointer">
              Projects
            </a>
            <a href="#contributions" onClick={toggleMenu} className="text-xl text-gray-200 hover:text-cyan-400 cursor-pointer">
              Contributions
            </a>
            <a href="#certifications" onClick={toggleMenu} className="text-xl text-gray-200 hover:text-cyan-400 cursor-pointer">
              Certifications
            </a>

            <div className="flex flex-row gap-8 mt-4">
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={40}
                    height={40}
                    className="cursor-pointer hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
