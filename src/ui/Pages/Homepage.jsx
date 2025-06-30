import React from "react";
import Toptrendingseries from "../Molecules/Toptrendingseries";
import Topupdatedseries from "../Molecules/Topupdatedseries";
import Category from "../Molecules/Category";

const Homepage = () => {
  return (
    <div>
      <section>
        <h1 className="text-4xl text-black mt-8 mb-1 ">Read English Stories</h1>
        <h1 className="text-gray-600 text-2xl ">A World of Stories</h1>
        <Toptrendingseries />
        <Topupdatedseries />
        <Category />
      </section>
    </div>
  );
};

export default Homepage;
