import React from "react";
import youth from "../../../public/db/youth.json";
import StoryCard from "../Card/Storycard";
const Youthstories = () => {
  const { Youth } = youth;
  return (
    <div>
      <section>
        <div>
          <div className="flex justify-between">
            <h1 className=" md:text-4xl text-xl font-bold text-black mt-10 mb-5 ">
              Youth Fiction Stories
            </h1>
            <button className=" md:text-4xl  text-2xl text-black mt-10 mb-5 ">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>

          <div className="flex md:gap-9 gap-5 overflow-x-auto scrollbar-hide">
            {Youth.map((item, index) => (
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

export default Youthstories;
