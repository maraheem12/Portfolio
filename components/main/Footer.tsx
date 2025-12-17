
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            {/* <div className="font-bold text-[16px]">Community</div> */}
            {/* <p className="relative z-[20] flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span>
                <a
                  href="https://www.youtube.com/@its-mathematics"
                  className="text-[15px] ml-[6px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </span>
            </p>
            <p className="relative z-[20] flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span>
                <a
                  href="https://github.com/maraheem12"
                  className="text-[15px] ml-[6px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="relative z-[20] flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span>
                <a
                  href="#about-me"
                  className="text-[15px] ml-[6px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </span>
            </p>

            <p className="relative z-[20] flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span>
                <a
                  href="https://www.linkedin.com/in/mohd-abdul-raheem/"
                  className="text-[15px] ml-[6px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <p className="flex relative z-[20] flex-row items-center my-[15px] cursor-pointer">
              <span>
                <a
                  href="#about-me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] ml-[6px]"
                >
                  About me
                </a>
              </span>
              {/* <span className="text-[15px] ml-[6px]">Learning about me</span>     
            </p>
            <p className="relative z-[20] flex flex-row items-center my-[15px] cursor-pointer">
              <span>
                <a
                  href="maraheem812@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] ml-[6px]"
                >
                  maraheem812@gmail.com
                </a>
              </span>
            </p> */}
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Mohammed Abdul Raheem 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
