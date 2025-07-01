import React from "react";
import category from "../../../public/db/category.json";
import Categorycard from "../Card/Categorycard";
const AllCategory = () => {
  const { categorys } = category;

  return (
    <div>
      <section className="pb-3">
        <div>
          <div className="flex justify-between">
            <h1 className="md:text-[1.8rem] text-[1.3rem] font-bold text-black md:mt-10 mt-7 md:mb-5 mb-3 ">
              Explore Categories
            </h1>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4 justify-center">
            {categorys.map((item, index) => (
              <Categorycard key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCategory;
