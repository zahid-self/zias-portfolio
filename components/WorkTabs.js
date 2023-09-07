import Image from "next/image";
import React, { useState } from "react";
import Work1 from "../public/work-image-1.jpg";
import Work2 from "../public/work-image-2.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CaseStudy, AllProducts, MobileUI, WebUI } from "@/utils/works";

const WorkList = [
  {
    id: 1,
    WorkTitle: "Masterpiece",
    WorkThumb: Work1,
    WorkDesc: "Landing page design for UI UX Designer portfolio",
    WorkCatagory: ["UI UX", "Design", "Website"],
    WorkUrl: "/",
  },
  {
    id: 2,
    WorkTitle: "Masterpiece",
    WorkThumb: Work2,
    WorkDesc: "Landing page design for UI UX Designer portfolio",
    WorkCatagory: ["UI UX", "Design", "Mobile App"],
    WorkUrl: "/",
  },
  {
    id: 3,
    WorkTitle: "Masterpiece",
    WorkThumb: Work1,
    WorkDesc: "Landing page design for UI UX Designer portfolio",
    WorkCatagory: ["UI UX", "Design", "Mobile App"],
    WorkUrl: "/",
  },
  {
    id: 4,
    WorkTitle: "Masterpiece",
    WorkThumb: Work1,
    WorkDesc: "Landing page design for UI UX Designer portfolio",
    WorkCatagory: ["UI UX", "Design", "Mobile App"],
    WorkUrl: "/",
  },
];

const WorkTabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-[70px]">
      <ul>
        <li>
          <bittom
            onClick={() => setOpenTab(1)}
            className={`block cursor-pointer border-b p-5 text-xl font-medium capitalize lg:p-6 ${
              openTab === 1 ? "border-[#B8B8B8]" : "border-transparent"
            }`}
          >
            All work
          </bittom>
        </li>
        <li>
          <bittom
            onClick={() => setOpenTab(2)}
            className={`block cursor-pointer border-b p-5 text-xl font-medium capitalize lg:p-6 ${
              openTab === 2 ? "border-[#B8B8B8]" : "border-transparent"
            }`}
          >
            Case Study
          </bittom>
        </li>
        <li>
          <bittom
            onClick={() => setOpenTab(3)}
            className={`block cursor-pointer border-b p-5 text-xl font-medium capitalize lg:p-6 ${
              openTab === 3 ? "border-[#B8B8B8]" : "border-transparent"
            }`}
          >
            Mobile UI Design
          </bittom>
        </li>
        <li>
          <bittom
            onClick={() => setOpenTab(4)}
            className={`block cursor-pointer border-b p-5 text-xl font-medium capitalize lg:p-6 ${
              openTab === 4 ? "border-[#B8B8B8]" : "border-transparent"
            }`}
          >
            Web UI Design
          </bittom>
        </li>
        <li>
          <bittom
            onClick={() => setOpenTab(5)}
            className={`block cursor-pointer border-b p-5 text-xl font-medium capitalize lg:p-6 ${
              openTab === 5 ? "border-[#B8B8B8]" : "border-transparent"
            }`}
          >
            Graphic Design
          </bittom>
        </li>
      </ul>
      <div className="sm:col-span-2 md:col-span-3 lg:pl-[100px]">
        <div className={openTab === 1 ? "block" : "hidden"}>
          <div className="space-y-6 max-h-[1250px] overflow-y-scroll scrollbar-none">
            {AllProducts.map((curElm) => {
              const {
                id,
                WorkTitle,
                WorkThumb,
                WorkDesc,
                WorkCatagory,
                WorkUrl,
              } = curElm;
              return (
                <>
                  <div
                    key={id}
                    className="p-5 bg-[#292929] grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-3 hover:bg-[#3D3D3D] group relative"
                  >
                    <div className="flex flex-col justify-between order-last lg:order-first">
                      <h2 className="text-4xl font-bold text-white">
                        {WorkTitle}
                      </h2>
                      <div className="mt-5">
                        <p className="text-base text-[#F5F5F5]">{WorkDesc}</p>
                        <ul className="flex flex-wrap gap-2 my-5 group-hover:mb-16">
                          {WorkCatagory.map((catagoryItem, index) => {
                            return (
                              <li
                                key={index}
                                className="px-2.5 py-1 rounded-[30px] border border-[#B8B8B8] inline-block text-xs text-[#B8B8B8] capitalize hover:bg-[#121011] hover:text-white hover:border-[#121011]"
                              >
                                {catagoryItem}
                              </li>
                            );
                          })}
                        </ul>
                        <a
                          className="absolute hidden group-hover:inline-flex gap-x-2 items-end text-md font-semibold text-white mt-10"
                          href={WorkUrl}
                          target="_blank"
                          style={{ bottom: '1rem', transform: 'translateY(-10px)', overflow: 'hidden' }}
                        >
                          View Project <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                    <div className="relative order-first lg:order-last">
                      <Image
                        className="w-full h-[360px] object-cover"
                        src={WorkThumb}
                        alt="work"
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          <div className="space-y-6 max-h-[1250px] overflow-y-scroll scrollbar-none">
            {CaseStudy.map((curElm) => {
              const {
                id,
                WorkTitle,
                WorkThumb,
                WorkDesc,
                WorkCatagory,
                WorkUrl,
              } = curElm;
              return (
                <div
                  key={id}
                  className="p-5 bg-[#292929] grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-3 hover:bg-[#3D3D3D] group relative"
                >
                  <div className="flex flex-col justify-between order-last lg:order-first">
                    <h2 className="text-4xl font-bold text-white">
                      {WorkTitle}
                    </h2>
                    <div className="mt-5">
                      <p className="text-base text-[#F5F5F5]">{WorkDesc}</p>
                      <ul className="flex flex-wrap gap-2 my-5 group-hover:mb-16">
                        {WorkCatagory.map((catagoryItem, index) => {
                          return (
                            <li
                              key={index}
                              className="px-2.5 py-1 rounded-[30px] border border-[#B8B8B8] inline-block text-xs text-[#B8B8B8] capitalize"
                            >
                              {catagoryItem}
                            </li>
                          );
                        })}
                      </ul>
                        <a
                          className="absolute hidden group-hover:inline-flex gap-x-2 items-center text-md font-semibold text-white"
                          href={WorkUrl}
                          target="_blank"
                          style={{ bottom: '1rem',transform: 'translateY(-10px)',overflow: 'hidden' }}
                        >
                          View Project <FaExternalLinkAlt />
                        </a>
                    </div>
                  </div>
                  <div className="relative order-first lg:order-last">
                    <Image
                      className="w-full h-[360px] object-cover"
                      src={WorkThumb}
                      alt="work"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={openTab === 3 ? "block" : "hidden"}>
          <div className="space-y-6 max-h-[1250px] overflow-y-scroll scrollbar-none">
            {MobileUI.map((curElm) => {
              const {
                id,
                WorkTitle,
                WorkThumb,
                WorkDesc,
                WorkCatagory,
                WorkUrl,
              } = curElm;
              return (
                <div
                  key={id}
                  className="p-5 bg-[#292929] grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-3 hover:bg-[#3D3D3D] group relative"
                >
                  <div className="flex flex-col justify-between order-last lg:order-first">
                    <h2 className="text-4xl font-bold text-white">
                      {WorkTitle}
                    </h2>
                    <div className="mt-5">
                      <p className="text-base text-[#F5F5F5]">{WorkDesc}</p>
                      <ul className="flex flex-wrap gap-2 my-5 group-hover:mb-16">
                        {WorkCatagory.map((catagoryItem, index) => {
                          return (
                            <li
                              key={index}
                              className="px-2.5 py-1 rounded-[30px] border border-[#B8B8B8] inline-block text-xs text-[#B8B8B8] capitalize"
                            >
                              {catagoryItem}
                            </li>
                          );
                        })}
                      </ul>
                      <a
                          className="absolute hidden group-hover:inline-flex gap-x-2 items-center text-md font-semibold text-white"
                          href={WorkUrl}
                          target="_blank"
                          style={{ bottom: '1rem',transform: 'translateY(-10px)',overflow: 'hidden' }}
                        >
                          View Project <FaExternalLinkAlt />
                        </a>
                    </div>
                  </div>
                  <div className="relative order-first lg:order-last">
                    <Image
                      className="w-full h-[360px] object-cover"
                      src={WorkThumb}
                      alt="work"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={openTab === 4 ? "block" : "hidden"}>
          <div className="space-y-6 max-h-[1250px] overflow-y-scroll scrollbar-none">
            {WebUI.map((curElm) => {
              const {
                id,
                WorkTitle,
                WorkThumb,
                WorkDesc,
                WorkCatagory,
                WorkUrl,
              } = curElm;
              return (
                <div
                  key={id}
                  className="p-5 bg-[#292929] grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-3 hover:bg-[#3D3D3D] group relative"
                >
                  <div className="flex flex-col justify-between order-last lg:order-first">
                    <h2 className="text-4xl font-bold text-white">
                      {WorkTitle}
                    </h2>
                    <div className="mt-5">
                      <p className="text-base text-[#F5F5F5]">{WorkDesc}</p>
                      <ul className="flex flex-wrap gap-2 my-5 group-hover:mb-16">
                        {WorkCatagory.map((catagoryItem, index) => {
                          return (
                            <li
                              key={index}
                              className="px-2.5 py-1 rounded-[30px] border border-[#B8B8B8] inline-block text-xs text-[#B8B8B8] capitalize"
                            >
                              {catagoryItem}
                            </li>
                          );
                        })}
                      </ul>
                      <a
                          className="absolute hidden group-hover:inline-flex gap-x-2 items-center text-md font-semibold text-white"
                          href={WorkUrl}
                          target="_blank"
                          style={{ bottom: '1rem',transform: 'translateY(-10px)',overflow: 'hidden' }}
                        >
                          View Project <FaExternalLinkAlt />
                        </a>
                    </div>
                  </div>
                  <div className="relative order-first lg:order-last">
                    <Image
                      className="w-full h-[360px] object-cover"
                      src={WorkThumb}
                      alt="work"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={openTab === 5 ? "block" : "hidden"}>
          <div className="space-y-6 max-h-[1250px] overflow-y-scroll scrollbar-none">
            {WorkList.map((curElm) => {
              const {
                id,
                WorkTitle,
                WorkThumb,
                WorkDesc,
                WorkCatagory,
                WorkUrl,
              } = curElm;
              return (
                <div
                  key={id}
                  className="p-5 bg-[#292929] grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-3 hover:bg-[#3D3D3D] group relative"
                >
                  <div className="flex flex-col justify-between order-last lg:order-first">
                    <h2 className="text-4xl font-bold text-white">
                      {WorkTitle}
                    </h2>
                    <div className="mt-5">
                      <p className="text-base text-[#F5F5F5]">{WorkDesc}</p>
                      <ul className="flex flex-wrap gap-2 my-5 group-hover:mb-16">
                        {WorkCatagory.map((catagoryItem, index) => {
                          return (
                            <li
                              key={index}
                              className="px-2.5 py-1 rounded-[30px] border border-[#B8B8B8] inline-block text-xs text-[#B8B8B8] capitalize"
                            >
                              {catagoryItem}
                            </li>
                          );
                        })}
                      </ul>
                      <a
                          className="absolute hidden group-hover:inline-flex gap-x-2 items-center text-md font-semibold text-white"
                          href={WorkUrl}
                          target="_blank"
                          style={{ bottom: '1rem',transform: 'translateY(-10px)',overflow: 'hidden' }}
                        >
                          View Project <FaExternalLinkAlt />
                        </a>
                    </div>
                  </div>
                  <div className="relative order-first lg:order-last">
                    <Image
                      className="w-full h-[360px] object-cover"
                      src={WorkThumb}
                      alt="work"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTabs;
