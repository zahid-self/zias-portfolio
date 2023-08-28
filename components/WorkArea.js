import React from "react";
import SectionTitle from "./SectionTitle";
import WorkTabs from "./WorkTabs";

const WorkArea = () => {
  return (
    <div id="work" className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="My work."
          subtitle="Overview of my latest and work of mobile and web ux design."
        />
        <WorkTabs />
      </div>
    </div>
  );
};

export default WorkArea;
