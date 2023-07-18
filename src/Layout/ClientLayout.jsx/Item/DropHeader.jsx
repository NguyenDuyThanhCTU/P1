import React from "react";
import { Link } from "react-router-dom";

const DropHeader = ({ title, image }) => {
  return (
    <div className="absolute w-full shadow-2xl  z-10 bg-white left-0">
      <div className="p-10">
        {title && (
          <>
            <div
              className={`grid  mx-[400px] ${
                title.length === 0 ? "grid-cols-1" : "grid-cols-2 "
              }`}
            >
              <div className="flex flex-col gap-2">
                {title.map((items, idx) => (
                  <Link to={items.link}>
                    <span
                      key={idx}
                      className="hover:text-blue-600 font-normal text-[16px] text-gray-500 cursor-pointer"
                    >
                      {items.name}
                    </span>
                  </Link>
                ))}
              </div>
              <div>
                <img src={image} alt="img" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DropHeader;
