import { Radio } from "antd";
import React, { useState } from "react";
import { BranchesItems } from "../../../../Utils/temp";

const Submit = ({
  setOwner,
  setShowroom,
  setName,
  setPhone,
  setId,
  setEmail,
}) => {
  const [value, setValue] = useState("Cá nhân");
  const onChange = (e) => {
    setValue(e.target.value);
    setOwner(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 p-2">
      <h3 className="text-[24px] ">Thông tin chủ xe</h3>
      <div className="flex flex-col gap-5">
        <h3>Chủ sở hữu xe là</h3>
        <div>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={"Cá nhân"}>Cá nhân</Radio>
            <Radio value={"Doanh nghiệp"}>Doanh nghiệp</Radio>
          </Radio.Group>
        </div>
        <div className="border rounded-lg">
          <input
            type="text"
            className="p-3 rounded-lg w-full"
            placeholder="Họ và tên *"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="border rounded-lg">
          <input
            type="text"
            className="p-3 rounded-lg w-full"
            placeholder="Số điện thoại *"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="border rounded-lg">
          <input
            type="text"
            className="p-3 rounded-lg w-full"
            placeholder="Số CMND/CCCD *"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="border rounded-lg">
          <input
            type="text"
            className="p-3 rounded-lg w-full"
            placeholder="Email *"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-[24px] ">Đăng ký Showroom nhận xe gần nhất</h3>
        <div className="flex flex-col gap-2">
          <label className="text-md font-medium ">Chọn đại lý ủy quyền:</label>
          <select
            className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
            onChange={(e) => {
              setShowroom(e.target.value);
            }}
          >
            {BranchesItems.map((item, idx) => (
              <option
                key={idx}
                className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                value={item.branchName}
              >
                Ô Tô Trường Xuân {item.branchName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Submit;
