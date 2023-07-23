"use client";

import { SlOptions } from "react-icons/sl";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { HeaderFooterItems, links } from "../../../Utils/item";
import DropHeader from "../Item/DropHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";
import { BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import DropDownHeader from "../../../components/Item/Phone/DropDownHeader";
import { MdOutlineFormatListBulleted } from "react-icons/md";

const Header = () => {
  const [Data, setData] = useState();
  const [isSelected, setIsSelected] = useState(10);
  const [Hidden, setHidden] = useState(false);
  const [isDropDown, setIsDropDonw] = useState(false);
  const { TradeMarkData } = useData();

  const HandleSelected = (idx) => {
    if (idx === 2) {
      setIsDropDonw(false);
      setIsSelected(10);
    } else {
      if (isSelected === idx) {
        setIsDropDonw(false);
        setIsSelected(10);
      } else {
        setData(HeaderFooterItems[idx]);
        setIsDropDonw(true);
        setIsSelected(idx);
      }
    }
  };

  return (
    <div className="relative ">
      <div className="p:hidden d:flex items-center justify-between px-10  w-full border-b shadow-2xl">
        <Link to="/">
          <div className="cursor-pointer hover:scale-105 duration-500">
            <img
              src={TradeMarkData.websiteLogo}
              alt="logo"
              className="w-[100px] h-[100px] p-2"
            />
          </div>
        </Link>

        <div>
          <div className="flex gap-10 items-center">
            {HeaderFooterItems.slice(0, 4).map((items, idx) => {
              return (
                <Link to={`${items.link}`}>
                  <div key={idx} className="flex items-center gap-2">
                    <h3
                      className="uppercase hover:text-blue-600 cursor-pointer font-light text-[#333] tracking-wider"
                      onClick={() => HandleSelected(idx)}
                    >
                      {items.title}
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
      {isDropDown && (
        <DropHeader
          title={Data?.content}
          image={Data?.image}
          setIsDropDonw={setIsDropDonw}
          setIsSelected={setIsSelected}
        />
      )}
      <div className="p:block d:hidden w-full  h-[60px] z-50">
        <div className="flex justify-between  items-center">
          <Link to="/">
            <img
              src={TradeMarkData.websiteLogo}
              alt="logo"
              className="h-[55px] ml-36"
            />
          </Link>
          <div className="flex items-center text-[60px]">
            {Hidden ? (
              <RxCross1
                className="bg-redPrimmary text-white p-2 "
                onClick={() => setHidden(!Hidden)}
              />
            ) : (
              <MdOutlineFormatListBulleted
                className="bg-redPrimmary text-white p-2 "
                onClick={() => setHidden(!Hidden)}
              />
            )}
          </div>
        </div>
        <div
          className={`${
            Hidden ? "h-screen" : "h-0 "
          } w-full duration-700 bg-[rgba(253,253,253,0.9)] overflow-hidden `}
        >
          {HeaderFooterItems.map((items, idx) => {
            let reLink = links[idx];
            return (
              <DropDownHeader
                content={items.title}
                link={reLink}
                setHidden={setHidden}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
