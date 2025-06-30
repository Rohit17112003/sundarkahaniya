import React from "react";
import drama from "../../../public/db/drama.json";
import StoryCard from "../Card/Storycard";
const Drama = () => {
  const { dramas } = drama;
  return (
    <div>
      <section>
        <div>
          <div className="flex justify-between">
            <h1 className=" text-4xl font-bold text-black mt-10 mb-5 ">
              Drama
            </h1>
            <button className=" text-4xl  text-black mt-10 mb-5 ">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>

          <div className="flex gap-9 overflow-x-auto scrollbar-hide">
            {dramas.map((item, index) => (
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

export default Drama;
