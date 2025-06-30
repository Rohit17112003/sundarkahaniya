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
            <h1 className="md:text-[1.8rem] text-[1.2rem] font-bold text-black mt-10 mb-5 ">
              Explore Categories
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-6 ">
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
