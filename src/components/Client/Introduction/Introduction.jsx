import React from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import Section4 from "./Section/Section4";

const Introduction = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <div className="p:hidden d:block">
        <Section3 />
        <Section4 />
      </div>
    </>
  );
};

export default Introduction;
