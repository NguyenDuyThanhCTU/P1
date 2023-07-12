import React from "react";
import { ProductSection2Items } from "../../../Utils/temp";
import Card from "../../Item/Card";

const Section1 = () => {
  return (
    <div className="pb-20 ">
      <div className="bg-grayBg  py-5">
        <div className=" h-[275px] text-center flex  flex-col justify-center gap-2 d:mx-0 p:mx-4 ">
          <h3 className="d:text-content p:text-[40px] font-bold">
            Sản phẩm bảo hiểm bổ trợ
          </h3>
          <p className="text-[24px] font-thin">
            Gia tăng bảo vệ cho cả gia đình trước các rủi ro phổ biến như tai
            nạn, <br className="d:block p:hidden" /> nằm viện, bệnh hiểm nghèo
          </p>
        </div>
      </div>

      <div className=" d:mt-20 p:ml-0 p:mt-5 w-full ">
        <div className="d:mx-4 p:mx-0  flex flex-col items-start gap-5  ">
          <div className="">
            <h3 className="p:text-[40px] d:text-content font-thin p-2">
              <strong className="font-bold">Vì sao chọn sản phẩm</strong> <br />{" "}
              Bảo hiểm bổ trợ?
            </h3>
          </div>
          <div className="d:flex-row p:flex-col flex justify-center items-center p:gap-5 d:gap-14 w-full">
            {ProductSection2Items.slice(0, 3).map((items) => (
              <Card
                image={items.image}
                date={items.date}
                type={items.type}
                title={items.title}
                content={items.content}
                link={items.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
