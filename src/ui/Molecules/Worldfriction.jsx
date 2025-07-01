import React from "react";
import Wordfriction from "../../../public/db/Wordfriction.json";
import StoryCard from "../Card/Storycard";
const Worldfriction = () => {
  const { world } = Wordfriction;
  return (
    <div>
      <section className="mb-16">
        <div>
          <div className="flex justify-between">
            <h1 className=" md:text-4xl text-xl font-bold text-black mt-10 mb-5 ">
              World of Fiction
            </h1>
            <button className=" md:text-4xl text-2xl  text-black mt-10 mb-5 ">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>

          <div className="flex md:gap-9 gap-5 overflow-x-auto scrollbar-hide">
            {world.map((item, index) => (
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

export default Worldfriction;
