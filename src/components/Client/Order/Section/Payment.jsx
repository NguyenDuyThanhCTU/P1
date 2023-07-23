import React, { useState } from "react";
import { useData } from "../../../../Context/DataProviders";
import Submit from "./Submit";
import { addDocument } from "../../../../Config/Services/Firebase/FireStoreDB";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const Payment = ({
  setBatteryTypes,
  setCarTypes,
  setCarColorTypes,
  setHoodColorTypes,
  isSort,
}) => {
  const [step, setStep] = useState(false);

  const [owner, setOwner] = useState("Cá nhân");
  const [showroom, setShowroom] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const HandleSubmit = () => {
    const data = {
      owner: owner,
      showroom: showroom,
      name: name,
      phone: phone,
      uid: id,
      email: email,
      product: isSort[0],
      state: "BsFillSendExclamationFill",
    };
    addDocument("orders", data)
      .then(() => {
        notification["success"]({
          message: "Thành công !!!",
          description: `Yêu cầu của bạn đã được gửi đi, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất !`,
        });
        navigate("/");
      })
      .catch(() => {
        notification["error"]({
          message: "Lỗi !!!",
          description: `Lỗi không xác định !`,
        });
      });
  };

  const { productTypes } = useData();
  return (
    <div className="h-full font-LexendDeca bg-white">
      <div className="py-8 px-4 flex flex-col gap-6">
        <div className="grid grid-cols-2 text-white text-center gap-2 cursor-pointer">
          <div
            className={`p-2  ${
              !step ? "bg-blue-500" : "bg-[#eeeeee] text-[#333333]"
            }`}
          >
            Lựa chọn xe
          </div>
          <div
            className={`p-2  ${
              step ? "bg-blue-500" : "bg-[#eeeeee] text-[#333333]"
            }`}
          >
            Nhập thông tin
          </div>
        </div>
        {!step ? (
          <div className="flex flex-col gap-6">
            <h3 className=" text-center px-5">
              {" "}
              Xin mời Quý khách vui lòng chọn phiên bản và ngoại thất xe!{" "}
            </h3>

            <div className="flex flex-col gap-2">
              <label className="text-md font-medium ">Dòng xe:</label>
              <select
                className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                onChange={(e) => {
                  setCarTypes(e.target.value);
                }}
              >
                {productTypes
                  ?.filter((item) => item.type === "Dòng xe")
                  .map((item, idx) => (
                    <option
                      key={idx}
                      className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-md font-medium ">Pin xe:</label>
              <select
                className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                onChange={(e) => {
                  setBatteryTypes(e.target.value);
                }}
              >
                {productTypes
                  ?.filter((item) => item.type === "Pin xe")
                  .map((item, idx) => (
                    <option
                      key={idx}
                      className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-md font-medium ">Màu xe:</label>
              <select
                className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                onChange={(e) => {
                  setCarColorTypes(e.target.value);
                }}
              >
                {productTypes
                  ?.filter((item) => item.type === "Màu xe")
                  .map((item, idx) => (
                    <option
                      key={idx}
                      className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-md font-medium ">Màu mui xe:</label>
              <select
                className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                onChange={(e) => {
                  setHoodColorTypes(e.target.value);
                }}
              >
                {productTypes
                  ?.filter((item) => item.type === "Màu mui xe")
                  .map((item, idx) => (
                    <option
                      key={idx}
                      className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="py-4 border-t">
              <div className="flex justify-between items-center text-[18px]">
                <p>Giá xe</p>
                {isSort && <p className="font-bold">{isSort[0]?.price} VNĐ</p>}
              </div>
              <p className="text-gray-400 text-[14px] mt-3">
                Giá xe đã bao gồm VAT
              </p>
            </div>
          </div>
        ) : (
          <>
            <Submit
              setOwner={setOwner}
              setShowroom={setShowroom}
              setName={setName}
              setPhone={setPhone}
              setId={setId}
              setEmail={setEmail}
            />
          </>
        )}

        {isSort?.length > 0 ? (
          <>
            {!step ? (
              <div
                className="font-light text-center bg-blue-500 text-white py-3 cursor-pointer hover:bg-blue-600 duration-300"
                onClick={() => setStep(true)}
              >
                Bước tiếp theo
              </div>
            ) : (
              <div
                className="font-light text-center bg-blue-500 text-white py-3 cursor-pointer hover:bg-blue-600 duration-300"
                onClick={() => HandleSubmit()}
              >
                Đặt cọc xe
              </div>
            )}

            {step && (
              <div
                className="font-light text-center border border-red-500 text-red-500 hover:bg-red-500 hover:text-white  py-3 cursor-pointer duration-300"
                onClick={() => setStep(false)}
              >
                Chọn lại
              </div>
            )}
          </>
        ) : (
          <div className="font-light text-center bg-gray-500 text-white py-3 cursor-pointer">
            Bước tiếp theo
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
