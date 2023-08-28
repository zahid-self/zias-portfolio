import React from "react";
import SectionTitle from "./SectionTitle";
import AboutSection from "./AboutSection";
import AboutInfo from "./AboutInfo";

const AboutArea = () => {
  return (
    <div id="about" className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Know about me."
          subtitle="Designing solutions that inspire, engage, and delight"
        />
        <AboutSection />
        <AboutInfo />
      </div>
    </div>
  );
};

export default AboutArea;
