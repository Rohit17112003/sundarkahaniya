import React from "react";
import topupdatedseries from "../../../public/db/topupdatedseries.json";
import StoryCard from "../Card/Storycard";
const Topupdatedseries = () => {
  const { series } = topupdatedseries;
  return (
    <div>
      <section>
        <div>
          <div className="flex justify-between">
            <h1 className=" md:text-4xl text-xl font-bold text-black mt-10 mb-5 ">
              Top Recently Updated Series
            </h1>
            <button className=" md:text-4xl text-2xl  text-black mt-10 mb-5 ">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>

          <div className="flex md:gap-9 gap-5 overflow-x-auto scrollbar-hide">
            {series.map((item, index) => (
              <StoryCard
                key={index}
                img={item.img}
                count={item.count}
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

export default Topupdatedseries;
