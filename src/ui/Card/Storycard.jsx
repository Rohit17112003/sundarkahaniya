"use client";
import Image from "next/image";

const StoryCard = ({ rating, count, img, title, time, readers, parts }) => {
  return (
    <div className="relative shrink-0 w-[180px] h-auto rounded-lg flex flex-col gap-1">
      {/* Image Section */}
      <div className="relative w-full h-68 rounded-xl overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="180px"
        />

        {/* Count badge */}
        <span className="absolute top-4 left-0 bg-red-800 text-xs h-7 w-7 rounded-r-md flex items-center justify-center text-white shadow-md z-10">
          {count}
        </span>

        {/* Rating badge */}
        <span className="absolute top-2 right-2 bg-blue-500 px-2 py-1 rounded-md text-white text-xs flex items-center gap-1 shadow-md z-10">
          <i className="ri-star-line text-md "></i>
          {rating}
        </span>

        <span className="absolute bottom-1 left-2  px-2 py-1 rounded-md text-white text-md font-bold  flex items-center gap-1 shadow-md z-10">
          <i className="ri-booklet-line"></i>
          {parts} Parts
        </span>
      </div>

      {/* Details */}
      <h3 className="font-semibold  text-xl truncate">{title}</h3>
      <p className="text-md text-gray-600">{time} hours</p>
      <p className="text-md text-gray-500">{readers} Total Readers</p>
    </div>
  );
};

export default StoryCard;
