import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Section7 from "./Section7/Section7";
import Section8 from "./Section8/Section8";

const Home = () => {
  return (
    <div className="flex  w-full flex-col items-center">
      <div className="d:w-[1440px] p:w-screen">
        <Section1 />
      </div>
      <div className="d:w-[1366px] p:w-screen mx-2">
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        {/* <Section7 /> */}
        <Section8 />
      </div>
    </div>
  );
};

export default Home;
