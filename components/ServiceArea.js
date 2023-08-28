import React from "react";
import SectionTitle from "./SectionTitle";
const ExpertiseList = [
  {
    id: 1,
    title: "UX Research",
    desc: "My UX research services include a variety of methodologies, such as user interviews, surveys, usability testing, and analytics analysis. My research methods to meet the specific needs of your project.",
  },
  {
    id: 2,
    title: "Mobile UI design",
    desc: "My mobile UI design services include the creation of high-fidelity mockups, interactive prototypes, and design systems that ensure consistency and usability across all mobile screens and devices.",
  },
  {
    id: 3,
    title: "Web UI design",
    desc: "Web UI design services include the creation of high-fidelity mockups, interactive prototypes, and design systems that ensure consistency and usability across all web pages and devices.",
  },
  {
    id: 4,
    title: "Branding Design",
    desc: "Branding design is a service that creates a visual identity for a business. It includes a logo, color scheme, typography, and messaging that communicate the brand's values and message to its target audience.",
  },
];
const ServiceArea = () => {
  return (
    <div id="service" className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="my expertise"
          subtitle="My expertise that will build your business success story "
        />
        <div>
          <ul>
            {ExpertiseList.map((curElm) => {
              const { id, title, desc } = curElm;
              return (
                <li
                  key={id}
                  className="p-7 border-b border-[#292929] grid grid-cols-1 md:grid-cols-3 items-center gap-y-5 text-[#B8B8B8] transition-all hover:text-white hover:border-white cursor-pointer"
                >
                  <div>
                    <h3 className="text-2xl lg:text-4xl font-bold">{title}</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p>{desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
