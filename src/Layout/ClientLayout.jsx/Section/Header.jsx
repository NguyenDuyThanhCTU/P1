"use client";

import { SlOptions } from "react-icons/sl";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { DropHeaderItems, HeaderItems } from "../../../Utils/item";
import DropHeader from "../Item/DropHeader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";

const Header = () => {
  const [Data, setData] = useState();
  const [isSelected, setIsSelected] = useState(10);
  const [Hidden, setHidden] = useState(false);
  const { TradeMarkData } = useData();

  const HandleSelected = (idx) => {
    if (isSelected === idx) {
      setHidden(false);
      setIsSelected(10);
    } else {
      setData(DropHeaderItems[idx]);
      setHidden(true);
      setIsSelected(idx);
    }
  };

  return (
    <div className="relative ">
      <div className="p:hidden d:flex items-center justify-between px-10  w-full border-b shadow-2xl">
        <div>
          <img
            src={TradeMarkData.websiteLogo}
            alt="logo"
            className="w-[100px] h-[100px] p-2"
          />
        </div>
        <div>
          <div className="flex gap-10 items-center">
            {HeaderItems.map((items, idx) => {
              return (
                <Link to={`${items.link}`}>
                  <div key={idx} className="flex items-center gap-2">
                    <h3
                      className="uppercase hover:text-blue-600 cursor-pointer font-light text-[#333] tracking-wider"
                      onClick={() => HandleSelected(idx)}
                    >
                      {items.name}
                    </h3>
                    <AiOutlineDown
                      className={`text-gray-400 text-[14px] duration-300 ${
                        isSelected === idx && "transform rotate-180"
                      }`}
                    />
                  </div>
                </Link>
              );
            })}
            <SlOptions
              className="text-[20px] cursor-pointer hover:scale-125 duration-300 "
              onClick={() => HandleSelected(4)}
            />
          </div>
        </div>
      </div>
      <div className="p:flex d:hidden justify-between items-center mx-2">
        <div>
          <img
            src={TradeMarkData.websiteLogo}
            alt="logo"
            className="w-[100px] h-[100px]"
          />
        </div>
        <div>
          <AiOutlineMenu className="w-[50px] h-[50px]" />
        </div>
      </div>
      {Hidden && <DropHeader title={Data.title} image={Data.image} />}
    </div>
  );
};

export default Header;
