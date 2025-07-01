import React from "react";
import Toptrendingseries from "../Molecules/Toptrendingseries";
import Topupdatedseries from "../Molecules/Topupdatedseries";
import Category from "../Molecules/Category";
import Bestsellers from "../Molecules/Bestsellers";
import Romance from "../Molecules/Romance";
import Youthstories from "../Molecules/Youthstories";
import Suspense from "../Molecules/Suspense";
import Mostlovedstories from "../Molecules/Mostlovedstories";
import Drama from "../Molecules/Drama";
import Biopics from "../Molecules/Biopics";
import Truecrimes from "../Molecules/Truecrimes";
import Worldfriction from "../Molecules/Worldfriction";
import SimpleSlider from "../Molecules/Banner";

const Homepage = () => {
  return (
    <div>
      <section>
        <h1 className="md:text-4xl text-xl font-bold text-gray-900 mt-8 mb-1 ">Read English Stories</h1>
        <h1 className="text-gray-600 md:text-2xl text-lg ">A World of Stories</h1>
        <Toptrendingseries />
        <Topupdatedseries />
        <Category />
        <Bestsellers />
        <Romance />
        <Youthstories />
        <Suspense />
        <Mostlovedstories />
        <Drama />
        <Biopics />
        <Truecrimes />
        <Worldfriction />
        <SimpleSlider/>
      </section>
    </div>
  );
};

export default Homepage;
