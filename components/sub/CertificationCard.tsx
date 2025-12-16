"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
    title: string;
    src: string;
    description: string;
}

const CertificationCard = ({ title, src, description }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group cursor-pointer w-[350px] h-[350px]">
            <div className="w-full h-full absolute top-0 left-0 bg-[#030014]/50 z-[10] group-hover:bg-[#030014]/20 transition-all duration-300" />

            <Image
                src={src}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute bottom-0 left-0 w-full p-4 z-[20] bg-gradient-to-t from-black to-transparent">
                <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {title}
                </h1>
                <p className="mt-2 text-gray-300 text-sm">
                    {description}
                </p>
            </div>

            <div className="absolute top-0 right-0 p-2 z-[20]">
                <div className="bg-purple-600/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-purple-500">
                    Verified
                </div>
            </div>
        </div>
    );
};

export default CertificationCard;
