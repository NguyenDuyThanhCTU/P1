import React from "react";

import Card from "./Card/Card";
import {
  PersonaSection3CardBot,
  PersonaSection3CardTop,
} from "../../../routes/Temp";

const Section3 = () => {
  return (
    <div className="relative pb-20 p:mt-20 d:m-0 px-2 d:w-full p:w-screen">
      <div className=" pb-[100px]   flex flex-col items-start">
        <div className="">
          <h3 className="text-content">
            <strong>Prudential</strong> đồng hành <br />
            cùng bạn!
          </h3>
          <p className="text-[18px] py-5">
            Chọn sản phẩm bảo hiểm nhân thọ phù hợp với nhu cầu của bạn
          </p>
        </div>
        <div className="d:grid grid-cols-3 gap-10 p:flex flex-col items-center">
          {PersonaSection3CardTop.slice(0, 3).map((items) => (
            <>
              <Card image={items.image} title={items.title} link={items.link} />
            </>
          ))}
        </div>
      </div>

      <div className=" flex flex-col items-end ">
        <div className="flex items-end flex-col ">
          <h3 className="text-content">
            <strong>Dễ dàng quản lý</strong>
            <br />
            hợp đồng bảo hiểm
          </h3>
          <p className="text-[18px] py-5">
            Prudential luôn nỗ lực mang đến trải nghiệm quản lý hợp đồng bảo
            hiểm nhân thọ dễ dàng, tiện lợi nhất cho khách hàng
          </p>
        </div>
        <div className="d:grid grid-cols-3 gap-10 p:flex flex-col items-center ">
          {PersonaSection3CardBot.slice(0, 3).map((items) => (
            <>
              <Card image={items.image} title={items.title} link={items.link} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
