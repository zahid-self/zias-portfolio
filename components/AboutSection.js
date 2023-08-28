import Link from "next/link";
import AboutImage from "../public/about-image.jpg";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="relative">
        <Image
          className="object-cover w-[80%] h-full"
          src={AboutImage}
          alt="about"
        />
        <div className="absolute right-0 top-2/4 -translate-y-2/4 space-y-6">
          <div className="bg-[#292929] text-white text-center p-6">
            <h2 className="text-4xl font-bold mb-2">06+</h2>
            <p className="text-base">Years of experience</p>
          </div>
          <div className="bg-[#292929] text-white text-center p-6">
            <h2 className="text-4xl font-bold mb-2">220+</h2>
            <p className="text-base">Completed Project</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-base text-white mb-6">
          For the past 6 years, I’ve worked as a UX/UI and Graphic Designer with
          some of agency’s, global clients and digital space. I specialize in
          using user-centered design principles to create products that meet
          user needs and business goals.
        </p>
        <p className="text-base text-white mb-6">
          My design process involves research, ideation, prototyping, and
          testing to ensure that every solution I deliver is user-friendly,
          accessible, and aesthetically pleasing. Im skilled in various design
          tools and have collaborated with cross-functional teams to deliver
          successful projects. Lets work together to create something great!
        </p>
        <Link
          className="min-w-[140px] px-8 h-[60px] inline-flex justify-center items-center border border-[#B8B8B8] text-center text-lg font-semibold capitalize text-white gap-x-2 hover:bg-[#292929] hover:text-white hover:stroke-[#b8b8b8]"
          href="/"
        >
          My Resume <FaCloudDownloadAlt />{" "}
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
