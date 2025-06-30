import React from "react";
import category from "../../../public/db/category.json";
import StoryCard from "../Card/Storycard";
import Categorycard from "../Card/Categorycard";
const Category = () => {
  const { categorys } = category;
  return (
    <div>
      <section>
        <div>
          <div className="flex justify-between">
            <h1 className=" text-4xl font-bold text-black mt-10 mb-5 ">
              Explore Categories
            </h1>
            <button className=" text-4xl  text-black mt-10 mb-5 ">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>

          <div className="flex gap-9 overflow-x-auto scrollbar-hide">
            {categorys.map((item, index) => (
              <Categorycard key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
