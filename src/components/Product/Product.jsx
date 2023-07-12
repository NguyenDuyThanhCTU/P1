import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
const Product = () => {
  return (
    <div className="flex  w-full flex-col items-center">
      <div className="d:w-[1440px] p:w-screen">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
};

export default Product;
