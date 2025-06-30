import React from "react";
import Mostlovedstory from "../../../public/db/Mostlovedstory.json";
import StoryCard from "../Card/Storycard";
const Mostlovedstories = () => {
  const { lovedstories } = Mostlovedstory;
  return (
    <div>
      <section>
        <div>
          <div className="flex justify-between">
            <h1 className=" text-4xl font-bold text-black mt-10 mb-5 ">
              Most Loved Stories
            </h1>
            <button className=" text-4xl  text-black mt-10 mb-5 ">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>

          <div className="flex gap-9 overflow-x-auto scrollbar-hide">
            {lovedstories.map((item, index) => (
              <StoryCard
                key={index}
                img={item.img}
                title={item.title}
                readers={item.readers}
                time={item.time}
                rating={item.rating}
                parts={item.parts}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mostlovedstories;
