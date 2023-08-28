import React from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { FaCalendar, FaTags } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import postThumb1 from "../public/blog-image-1.jpg";
import postThumb2 from "../public/blog-image-2.jpg";
import postThumb3 from "../public/blog-image-3.jpg";
const PostData = [
  {
    id: 1,
    postThumb: postThumb1,
    postDate: "02 Jun, 2022",
    postgCatagorys: ["ai", "Technology", "Trend"],
    postTitle: "Accumsan euismod enim magna consequat amet donec blandit.",
    postUrl: "/",
  },
  {
    id: 2,
    postThumb: postThumb2,
    postDate: "02 Jun, 2022",
    postgCatagorys: ["ai", "Technology", "Trend"],
    postTitle: "Accumsan euismod enim magna consequat amet donec blandit.",
    postUrl: "/",
  },
  {
    id: 3,
    postThumb: postThumb3,
    postDate: "02 Jun, 2022",
    postgCatagorys: ["ai", "Technology", "Trend"],
    postTitle: "Accumsan euismod enim magna consequat amet donec blandit.",
    postUrl: "/",
  },
];

const BlogArea = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="News & Blog"
          subtitle="Read our daily blog for tips, resources and strategy"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PostData.map((curElm) => {
            const {
              id,
              postThumb,
              postDate,
              postgCatagorys,
              postTitle,
              postUrl,
            } = curElm;
            return (
              <div className="bg-Pcolor p-4" key={id}>
                <div className="overflow-hidden">
                  <Link href={postUrl}>
                    <Image
                      src={postThumb}
                      width={800}
                      height={200}
                      alt="Picture of the author"
                    />
                  </Link>
                </div>
                <div className="pt-4">
                  <div className="flex items-center justify-between text-[10px] text-[#bbbbbb] gap-x-3">
                    <div className="flex items-center gap-x-1">
                      <FaCalendar />
                      <span>{postDate}</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <FaTags />
                      <span>{postgCatagorys.join(' ')}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-white my-4 transition-all hover:text-Hcolor">
                    <Link href={postUrl}>{postTitle}</Link>
                  </h3>
                  <Link className="inline-flex items-center gap-x-3 text-lg font-semibold text-white transition-all hover:text-Hcolor" href={postUrl}>Read more <FiArrowUpRight /> </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
