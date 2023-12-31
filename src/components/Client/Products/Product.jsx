import React from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";

const Product = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <div className="d:block p:hidden">
        <Section3 />
      </div>
    </>
  );
};

export default Product;
