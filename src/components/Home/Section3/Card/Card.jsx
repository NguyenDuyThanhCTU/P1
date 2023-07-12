import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Card = ({ image, title, link }) => {
  return (
    <Link to={link}>
      {" "}
      <div className="relative bg-white w-[368px] h-[365px] rounded-2xl">
        <div>
          <img src={image} alt="img" className="rounded-t-2xl" />
        </div>
        <h3 className="text-[24px] font-bold py-6 px-4">{title}</h3>
        <div className="absolute -bottom-4 right-7">
          <AiOutlineRight className="text-[35px] p-1 border-4 border-redPrimmary rounded-full bg-redPrimmary text-white" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
