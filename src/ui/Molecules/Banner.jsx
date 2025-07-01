"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="w-full max-w-[1000px]">
        <Slider {...settings}>
          <Link href="#">
            <Image
              src="/Assets/banner.webp"
              width={1000}
              height={400}
              alt="Banner 1"
              className=" rounded-lg md:rounded-xl w-full object-cover md:h-[400px] h-[200px]"
            />
          </Link>
          <Link href="#">
            <Image
              src="/Assets/banner (1).webp"
              width={1000}
              height={400}
              alt="Banner 2"
              className="rounded-lg md:rounded-xl w-full object-cover md:h-[400px] h-[200px]"
            />
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
