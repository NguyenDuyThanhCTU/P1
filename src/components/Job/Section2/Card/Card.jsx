import React from "react";
// import { Link } from "react-router-dom";

const Card = ({ image, title, content }) => {
  return (
    // <Link to={link}>
    <div className="bg-white hover:shadow-2xl rounded-2xl w-[366px] cursor-pointer">
      <div className="relative">
        <img src={image} alt="img" className=" object-contain rounded-t-2xl " />
      </div>

      <div className="py-6 px-5 flex  flex-col gap-3 justify-start">
        <div>
          <h3 className="text-[24px]">{title}</h3>
        </div>
        <p className="font-thin truncate-webkit ">{content}</p>
      </div>
    </div>
    // </Link>
  );
};

export default Card;
