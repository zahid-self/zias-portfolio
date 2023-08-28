import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import QuoteIcon from "../public/quote-icon.svg";
const TestimonialData = [
  {
    id: 1,
    desc: "I just wanted to express my appreciation for the exceptional work you did on our project. Your design and user experience exceeded our expectations, and weve received positive feedback from our users. Your ability to collaborate effectively and incorporate our feedback was greatly appreciated.",
    authorName: "Mary Sole",
    authorPro: "Marketing Executive Manager",
  },
  {
    id: 2,
    desc: "I just wanted to express my appreciation for the exceptional work you did on our project. Your design and user effectively and incorporate our feedback was greatly appreciated.",
    authorName: "Mary Sole",
    authorPro: "Marketing Executive Manager",
  },
  {
    id: 3,
    desc: "I just wanted to express my appreciation for the exceptional work you did on our project. Your design and user effectively and incorporate our feedback was greatly appreciated.",
    authorName: "Mary Sole",
    authorPro: "Marketing Executive Manager",
  },
  {
    id: 4,
    desc: "I just wanted to express my appreciation for the exceptional work you did on our project. Your design and user effectively and incorporate our feedback was greatly appreciated.",
    authorName: "Mary Sole",
    authorPro: "Marketing Executive Manager",
  },
];
const TestimonialSlider = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {TestimonialData.map((curElm) => {
        const { id, desc, authorName, authorPro } = curElm;
        return (
          <div key={id}>
            <Image
              className="w-[65px] h-[45px] object-cover"
              src={QuoteIcon}
              alt="icon"
            />
            <div className="py-7">
              <p className="text-[#E0E0E0] text-base font-normal">{desc}</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-white mb-1">
                {authorName}
              </h4>
              <p className="text-xs text-[#B8B8B8]">{authorPro}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default TestimonialSlider;
