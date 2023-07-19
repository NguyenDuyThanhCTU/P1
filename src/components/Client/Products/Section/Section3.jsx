import React, { useState } from "react";
import { CardColorItems, HoodColorItems } from "../../../../Utils/item";

const Section3 = () => {
  const [selectedLevel, setSelectedLevel] = useState(false);
  const [selectedCarColor, setSelectedCardColor] = useState(0);
  const [selectedHoodColor, setSelectedHooddColor] = useState(0);

  return (
    <div className="bg-[url(https://wuling-ev.vn/Content/images/product/Frame4/LV2/green/bg_Green.jpg)] flex h-screen items-center gap-5">
      <div
        className="flex flex-col ml-[150px] flex-1 font-Montserrat gap-16 
      "
      >
        <div className="flex cursor-pointer">
          <div
            className={`py-2 px-10 border-b   duration-300 ${
              selectedLevel && "border-black"
            }`}
            onClick={() => setSelectedLevel(true)}
          >
            LV2
          </div>
          <div
            className={`py-2 px-10 border-b duration-300  ${
              !selectedLevel && "border-black"
            }`}
            onClick={() => setSelectedLevel(false)}
          >
            LV1
          </div>
        </div>
        <div>
          <h3 className="uppercase leading-[80px] text-[85px] text-[#7fb595] tracking-[5px] w-[100px] h-auto">
            Xanh <span className="mt-[200px]">bơ</span>
          </h3>
        </div>
        <div className="flex gap-28">
          <div>
            <h3> Màu xe</h3>
            <div className="flex gap-4 mt-4">
              {CardColorItems.map((items, idx) => (
                <>
                  <div
                    className={`border w-[38px] h-[38px] rounded-full cursor-pointer ${
                      selectedCarColor === idx ? "border-black" : ""
                    }`}
                    onClick={() => setSelectedCardColor(idx)}
                  >
                    <div
                      className={`h-9 w-9 border-2 border-solid border-white rounded-full  ${items.color}`}
                    ></div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div>
            <h3> Màu Nóc</h3>
            <div className="flex gap-4 mt-4">
              {HoodColorItems.map((items, idx) => (
                <>
                  <div
                    className={`border w-[38px] h-[38px] rounded-full cursor-pointer ${
                      selectedHoodColor === idx ? "border-black" : ""
                    }`}
                    onClick={() => setSelectedHooddColor(idx)}
                  >
                    <div
                      className={`h-9 w-9 border-2 border-solid border-white rounded-full  ${items.color}`}
                    ></div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img
          src="https://wuling-ev.vn/Content/images/product/Frame4/LV2/green/car_green.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Section3;
