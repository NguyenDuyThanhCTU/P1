import React from "react";
import { BiPhone, BiMapPin } from "react-icons/bi";
import { BranchesItems } from "../../../Utils/temp";

const Branches = () => {
  return (
    <div className="h-screen font-Montserrat">
      <div className="p-10">
        <h3 className="text-[42px] font-light ">Hệ thống phân phối</h3>

        <div className="grid grid-cols-4 gap-5 font-NunitoSans mt-10">
          {BranchesItems.map((items, idx) => (
            <div className="rounded-sm shadow-2xl border">
              <div className="p-4 flex flex-col justify-between h-full gap-3">
                <h3 className="font-bold text-[24px] text-content1 py-3 border-b">
                  Ô Tô Trường Xuân {items.branchName}
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">Địa chỉ</p>
                    <div className="flex items-center gap-2 text-blue-500">
                      <BiMapPin />
                      <p className="hover:underline">Chỉ đường</p>
                    </div>
                  </div>
                  <p className="text-content1 text-[14px]">{items.address}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold">Hotline</p>
                    <div className="flex items-center gap-2 text-blue-500">
                      <BiPhone />
                      <p className="hover:underline text-[14px]">
                        {items.hotline}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" text-blue-600 border border-blue-600 text-center py-3">
                  Xem thêm
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;
