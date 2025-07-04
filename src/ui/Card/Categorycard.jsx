"use client";
import Image from "next/image";

const Categorycard = ({ img, title,className = "" }) => {
  return (
    <div className={`relative shrink-0 w-auto h-auto rounded-lg flex flex-col gap-1 cursor-pointer ${className}`}>
      <div className="relative w-full h-48 rounded-md overflow-hidden">
        <Image
          fill
          src={img}
          alt={title}
          className="object-cover"
          sizes="180px"
        />
        <span className="absolute bottom-1 left-2  px-2 py-1 rounded-md text-white text-md font-bold  flex items-center gap-1 shadow-md z-10">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Categorycard;
