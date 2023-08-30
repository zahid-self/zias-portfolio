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
            <a
              className="min-w-[140px] px-8 h-[60px] inline-flex justify-center items-center border border-[#B8B8B8] text-center text-lg font-semibold capitalize text-white gap-x-2 hover:bg-[#292929] hover:text-white hover:stroke-[#b8b8b8]"
              href="https://wa.me/+96894242973"
            >
              Start a Project
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <mask id="mask0_744_115" style={{ maskType :'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                    <rect y="0.5" width="20" height="20" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_744_115)">
                    <path d="M11.6667 15.5L10.5 14.2917L13.4583 11.3333H3.33334V9.66667H13.4583L10.5 6.70833L11.6667 5.5L16.6667 10.5L11.6667 15.5Z" fill="#EEEEEE"/>
                  </g>
                </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
