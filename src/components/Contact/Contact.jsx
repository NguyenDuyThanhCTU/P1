import React, { useState } from "react";
import Input from "./Input.jsx/Input";
import { IconMapping, SocialMediaDashboard } from "../../Utils/item";
import { notification } from "antd";
import { useData } from "../../Context/DataProviders";
import { BsPhone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Feedback, setFeedback] = useState("");
  const { Phone, Location, Address, Gmail, Logo, SocialMedia } = useData();

  const HandleSubmit = () => {
    if (!name || !phone || !Feedback) {
      notification["error"]({
        message: "Lỗi",
        description: `Vui lòng nhập đầy đủ THÔNG TIN`,
      });
    } else {
      notification["success"]({
        message: "Thành công",
        description: `Mẫu của bạn đã được gửi đi!`,
      });
    }
  };
  return (
    <div className=" pt-20 font-OpenSans ">
      <div className="p-2 p:flex-col d:flex-row flex justify-center gap-5">
        <div>
          <img
            src="https://qhomedecor.vn/wp-content/uploads/2020/10/img-lienhe.png"
            alt="img"
            className="w-[685px]"
          />
        </div>
        <div>
          <div>
            <h3 className="text-content font-light ">
              <strong className="font-bold">Liên hệ</strong> với tôi
            </h3>

            <div className=" py-3 flex flex-col gap-3">
              <p className="font-normal p:w-auto d:w-[500px]">
                Hãy để lại thông tin đầy đủ theo mẫu bên dưới, Tôi sẽ liên hệ hỗ
                trợ bạn trong thời gian sớm nhất.
              </p>
              <p className="text-redPrimmary font-thin">
                * là các thông tin bắt buộc
              </p>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <Input placeholder="Họ Tên(*)" setData={setName} />
              <Input placeholder="Email" setData={setEmail} />
              <Input placeholder="Điện thoại(*)" setData={setPhone} />
              <textarea
                placeholder="Hãy cho tôi biết câu hỏi hoặc phản hồi của bạn(*)"
                className="outline-none border rounded-md p-2 w-full"
                onChange={(e) => {
                  setFeedback(e.target.value);
                }}
              />
            </div>
            <div
              className="cursor-pointer "
              onClick={() => {
                HandleSubmit();
              }}
            >
              <span className="uppercase py-2 px-6 bg-red-400 hover:bg-redPrimmary text-white">
                gửi đi
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="font-LexendDeca text-black  p:w-auto w-full flex flex-col items-center">
        <div className="  bg-white d:w-[1420px] rounded-t-2xl flex d:flex-row p:flex-col items-start">
          <div className="m-10 flex-1 flex flex-col items-center gap-10">
            <div>
              <img
                src={Logo}
                alt="logo"
                className="object-cover w-80 bg-white"
              />
            </div>
            <iframe
              src={Location}
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="outline-none"
            ></iframe>
          </div>
          <div className="flex-1 text-[18px] p-2 ">
            <h3 className="text-[32px] my-10 text-center font-bold">Liên hệ</h3>
            <div className="flex flex-col gap-5">
              <p>
                <BsPhone className="inline-block text-[18px] font-bold mr-2" />
                <strong>Điện thoại:</strong> {Phone}
              </p>
              <p>
                <SiGmail className="inline-block text-[18px] font-bold mr-2" />
                <strong>Gmail:</strong> {Gmail}
              </p>
              <div className="flex gap-5">
                <div>
                  <MdOutlineConnectWithoutContact className="inline-block text-[18px] font-bold mr-2" />
                  <strong>Liên hệ:</strong>
                </div>
                <div className="flex gap-5">
                  {SocialMediaDashboard.slice(0, 4).map((items, idx) => {
                    let Icon = IconMapping[items.icon];
                    const data = SocialMedia[idx];
                    return (
                      <>
                        {Icon && (
                          <a
                            href={`${
                              items.icon === "SiZalo"
                                ? `https://zalo.me/${data}`
                                : data
                            }`}
                            target="_blank"
                          >
                            <Icon className="text-[30px] cursor-pointer hover:bg-white p-1  hover:text-blue-600" />
                          </a>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
              <p className="mb-5">
                <CiLocationOn className="inline-block text-[18px] font-bold mr-2 " />
                <strong>Địa chỉ:</strong>
                <br /> {Address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
