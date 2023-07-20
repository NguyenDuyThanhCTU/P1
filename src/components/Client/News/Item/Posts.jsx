import moment from "moment/moment";
import React, { useEffect } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const Posts = ({ Data }) => {
  const formattedDate = moment
    .unix(Data[0]?.createdAt.seconds)
    .format("MMMM DD, YYYY");

  return (
    <div>
      <div className=" flex mt-10 font-Montserrat gap-10">
        <div className="flex-[55%] relative w-full  ">
          <div className="flex flex-coltext-white ">
            <div className="w-full">
              <img
                src={Data[0]?.image}
                alt="postimage"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute p-4 bottom-0">
              <div>
                <span className="py-1 px-3 bg-blue-400 text-[16px] uppercase ">
                  Hot news
                </span>
              </div>
              <p className="uppercase text-[28px] font-light ">
                {Data[0]?.title}
              </p>
              <div className="flex items-center gap-1 ">
                <AiOutlineClockCircle />
                <p className="0">{formattedDate}</p>
              </div>
            </div>
          </div>
          <div className="">
            {Data?.slice(5).map((items, idx) => {
              const formattedDate = moment
                .unix(items.createdAt.seconds)
                .format("MMMM DD, YYYY");

              return (
                <div
                  className={`flex items-center   border-b ${
                    idx === 0 ? "pb-10" : "py-10"
                  }`}
                >
                  <div className="flex-[35%] h-[232px]">
                    <img
                      src={items.image}
                      alt="postsimage"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="pl-6 flex flex-col items-start gap-2 flex-[65%]">
                    <h3 className=" truncate2 ">{items.title}</h3>
                    <div className="flex items-center gap-1 text-gray-400">
                      <AiOutlineClockCircle />
                      <p className="">{formattedDate}</p>
                    </div>
                    <p className="text-gray-400 truncate3 text-[16px] font-NunitoSans">
                      {items.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-[45%]">
          {Data?.slice(1, 4).map((items, idx) => {
            const formattedDate = moment
              .unix(items.createdAt.seconds)
              .format("MMMM DD, YYYY");

            return (
              <div
                className={`flex items-center   border-b ${
                  idx === 0 ? "pb-10" : "py-10"
                }`}
              >
                <div className="flex-[30%] h-[155px]">
                  <img
                    src={items.image}
                    alt="postsimage"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="pl-6 flex flex-col gap-2 flex-[70%]">
                  <h3>{items.title}</h3>
                  <div className="flex items-center gap-1 text-gray-400">
                    <AiOutlineClockCircle />
                    <p className="">{formattedDate}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
