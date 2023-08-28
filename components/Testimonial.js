import React from "react";
import SectionTitle from "./SectionTitle";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Client Feedback"
          subtitle="Here are some words from my satisfied clients"
        />
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
