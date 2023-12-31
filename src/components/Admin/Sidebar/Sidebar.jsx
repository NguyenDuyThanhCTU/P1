import React from "react";

import { useStateProvider } from "../../../Context/StateProvider";
import {
  IconMapping,
  ProductSidebarAdmin,
  WebsiteSidebarAdmin,
} from "../../../Utils/item";
import { notification } from "antd";
const Sidebar = () => {
  const { isSelected, setSelected } = useStateProvider();
  // const HandleBlock = () => {
  //   notification["warning"]({
  //     message: "Thao tác không thành công",
  //     description: `
  //     Website của bạn không hỗ trợ chức năng này !`,
  //   });
  // };
  return (
    <div className="bg-black  h-[100vh] text-white border-r border-gray-800 overflow-y-scroll w-full">
      <div className="w-full flex items-center justify-center border-b border-gray-800 py-3">
        <img
          src="https://image-sn.s3.amazonaws.com/Russo+Tech.png"
          alt="logo"
          className="w-24 h-[100] inline-block circle-animation"
        />
        <p className="inline-block ml-3 text-[25px]">Th Dashboard</p>
      </div>
      <div className="flex flex-col ml-14 gap-16 mt-10 relative">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[25px]">Website</h3>
          <div className="flex flex-col items-start gap-10">
            {WebsiteSidebarAdmin.map((items, idx) => {
              let Icon = IconMapping[items.icon];

              return (
                <div
                  className={`flex gap-3 items-center cursor-pointer hover:scale-125 duration-300 ${
                    isSelected === idx ? "text-blue-400" : "border-white"
                  }`}
                  onClick={() => setSelected(idx)}
                >
                  {Icon && (
                    <Icon
                      className={`border-2 rounded-full text-[30px] p-[3px] ${
                        isSelected === idx ? "border-blue-400" : "border-white"
                      }`}
                    />
                  )}
                  <p> {items.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h3 className="text-[28px]">Service</h3>
          <div className="flex flex-col items-start gap-10">
            {ProductSidebarAdmin.map((items, idx) => {
              let Icon = IconMapping[items.icon];

              return (
                <div
                  className={`flex gap-3 items-center cursor-pointer hover:scale-125 duration-300 ${
                    isSelected === idx + 5 ? "text-blue-400" : "border-white"
                  }`}
                  onClick={() => setSelected(idx + 5)}
                >
                  {Icon && (
                    <Icon
                      className={`border-2 rounded-full text-[30px] p-[3px] ${
                        isSelected === idx + 5
                          ? "border-blue-400"
                          : "border-white"
                      }`}
                    />
                  )}
                  <p> {items.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`h-12 w-1 bg-blue-400 overflow-hidden rounded-t-full rounded-b-full absolute right-0 top-[43px]
        duration-300 transition transform 
        ${
          isSelected === 0
            ? "translate-y-0"
            : isSelected === 1
            ? "translate-y-[73px]"
            : isSelected === 2
            ? "translate-y-[142px]"
            : isSelected === 3
            ? "translate-y-[212px]"
            : isSelected === 4
            ? "translate-y-[282px]"
            : isSelected === 5
            ? "translate-y-[439px]"
            : isSelected === 6
            ? "translate-y-[509px]"
            : isSelected === 7
            ? "translate-y-[579px]"
            : isSelected === 8
            ? "translate-y-[649px]"
            : null
        }`}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
