import Image from "next/image";
import React from "react";
import CallToImage from "../public/call-to-image.png";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="container mx-auto px-4 bg-[#000000]">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-6">
          <div className="md:w-4/12">
            <Image
              className="w-full h-full object-cover"
              src={CallToImage}
              alt="CallToImage"
            />
          </div>
          <div className="md:w-6/12 md:ml-auto text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl	text-white font-bold mb-10">I’m available for Freelance Project</h2>
            <Link
              className="min-w-[140px] px-8 h-[60px] inline-flex justify-center items-center border border-[#B8B8B8] text-center text-lg font-semibold capitalize text-white gap-x-2 hover:bg-[#292929] hover:text-white hover:stroke-[#b8b8b8]"
              href="/"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
