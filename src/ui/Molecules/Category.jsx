"use client"
import React from "react";
import category from "../../../public/db/category.json";
import Categorycard from "../Card/Categorycard";
import { useRouter } from "next/navigation";
const Category = () => {
  const { categorys } = category;
  const router = useRouter();
  const handleAllCategory= ()=>{
    router.push("/category");
  }
  return (
    <div>
      <section>
        <div>
          <div className="flex justify-between">
            <h1 className=" md:text-4xl text-xl font-bold text-black mt-10 mb-5 ">
              Explore Categories
            </h1>
            <button className=" md:text-4xl text-2xl  text-black mt-10 mb-5 " onClick={handleAllCategory}>
              <i className="ri-arrow-right-s-line cursor-pointer"></i>
            </button>
          </div>
          <div className="flex md:gap-9 gap-5 overflow-x-auto scrollbar-hide">
            {categorys.map((item, index) => (
              <Categorycard key={index} img={item.img}  count={item.count} title={item.title} className="!w-[300px]"/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
