import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/uxzia.png";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll'
const Header = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <nav className="py-5 top-0 left-0 z-40 w-full sticky bg-Scolor">
        <div className="container flex flex-wrap items-center justify-between mx-auto px-4">
          <Link to="top" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer">
            <Image
              className="max-h-10 object-cover max-w-[130px] sm:max-w-[160px]"
              src={logo}
              alt="uxzia"
            />
          </Link>
          <div className="flex md:order-2 gap-x-4">
            <Link
              to="contact" spy={true} smooth={true} offset={-100} duration={500}
              className="cursor-pointer text-white  border border-white transition-all hover:bg-white hover:text-Scolor font-semibold text-base md:text-lg capitalize px-4 py-1.5 text-center"
            >
              Hire me
            </Link>
            <button
              onClick={handleToggle}
              type="button"
              className="inline-flex md:hidden items-center justify-center text-white  border border-white transition-all hover:bg-white hover:text-Scolor font-semibold rounded-lg text-lg capitalize px-4 py-1.5 text-center"
            >
              <FaBars />
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 md:ml-auto md:mr-[30px] ${isActive ? "hidden" : ""}`}
          >
            <ul className="flex flex-col space-y-3 md:space-y-0 mt-4 p-4 md:p-0 bg-[#292929] md:bg-transparent rounded-md  md:flex-row md:space-x-8 md:mt-0 text-sm text-[#B8B8B8]">
              <li>
                <Link className="cursor-pointer " activeClass="current-menu-item" to="work" spy={true} smooth={true} offset={-100} duration={500}>Work</Link>
              </li>
              <li>
                <Link className="cursor-pointer" activeClass="current-menu-item" to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
              </li>
              <li>
                <Link className="cursor-pointer" activeClass="current-menu-item" to="service" spy={true} smooth={true} offset={-100} duration={500}>Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
