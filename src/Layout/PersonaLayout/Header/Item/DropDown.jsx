import React, { useState } from "react";
// import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";

const DropDown = ({ content, link, setHidden }) => {
  // const [DropDown, setDropDown] = useState(false);
  return (
    <div className="p-4  bg-white">
      <div className=" border-t border-gray-200 flex justify-between pt-5 items-center mx-5">
        <Link
          to={link}
          onClick={() => {
            setHidden(false);
          }}
        >
          <h3 className="text-[20px] font-normal">{content}</h3>
        </Link>
        {/* {DropDown && title ? (
          <AiOutlineUp
            className="text-[25px] text-redPrimmary"
            onClick={() => {
              setDropDown(!DropDown);
            }}
          />
        ) : (
          <AiOutlineDown
            className="text-[25px] text-redPrimmary"
            onClick={() => {
              setDropDown(!DropDown);
            }}
          />
        )} */}
      </div>
      {/* <div
        className={`${
          DropDown ? "h-auto" : "h-0"
        } w-full duration-1000 bg-none overflow-hidden pt-2 mx-5 font-thin text-[18px]`}
      >
        {title.map((items) => (
          <div className="mb-2">
            <p>{items.name}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default DropDown;
