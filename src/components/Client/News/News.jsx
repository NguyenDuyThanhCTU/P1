import React, { useState, useEffect } from "react";
import Posts from "./Item/Posts";
import { useData } from "../../../Context/DataProviders";

const News = () => {
  const [isSelected, setSelected] = useState(false);
  const { PostOther, PostCompany } = useData();

  return (
    <div>
      <div className="p-20 ">
        <div className="w-full items-center flex flex-col font-Montserrat">
          <h3 className="text-content1 text-[42px] font-light">Tin Tức</h3>
          <div className="flex items-center text-[#999999] text-[20px] font-light mt-3 cursor-pointer">
            <div
              className={`px-16 py-3 border-b-2 ${
                !isSelected && "border-blue-500"
              }`}
              onClick={() => setSelected(false)}
            >
              Khác
            </div>
            <div
              className={`px-16 py-3 border-b-2 ${
                isSelected && "border-blue-500"
              }`}
              onClick={() => setSelected(true)}
            >
              Công ty
            </div>
          </div>
        </div>
        <div>
          <Posts Data={isSelected ? PostCompany : PostOther} />
        </div>
      </div>
    </div>
  );
};

export default News;
