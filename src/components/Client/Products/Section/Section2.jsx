import React from "react";
import { ProductSection2Items } from "../../../../Utils/item";

const Section2 = () => {
  return (
    <div className="bg-[url(https://wuling-ev.vn/Content/images/product/Frame2/bg-about-model.jpg)] flex d:h-screen p:h-auto items-center gap-5">
      <div className="flex flex-col  d:flex-1 d:ml-[100px] p:ml-2 gap-5 py-4 ">
        <div>
          <img
            src="https://wuling-ev.vn/Content/images/product/Frame2/title-card-about-model.png"
            alt="image"
          />
        </div>

        <div className="grid grid-cols-1 rounded-[30px] bg-[rgba(255,255,255,.5)]">
          <div className="p-4 flex items-center gap-3 text-title">
            <img
              src="https://wuling-ev.vn/Content/images/product/Frame2/icon-1.png"
              alt="image"
            />
            <p className="text-[18px] font-bold">
              Wuling HongGuang MiniEV là sản phẩm được nghiên cứu, phát triển
              bởi liên doanh của GM (Mỹ) - SGMW. Được kiểm soát nghiêm ngặt từ
              khâu sản xuất tới khâu giám sát chất lượng, xuất xưởng theo tiêu
              chuẩn GM toàn cầu, Wuling HongGuang MiniEV đã khẳng định được uy
              tín chất lượng sản phẩm, trở thành mẫu ô tô điện mini bán chạy
              nhất thế giới kể từ khi ra mắt lần đầu năm 2020
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2  gap-5">
          {ProductSection2Items.map((items, idx) => (
            <div
              key={idx}
              className="p-4 flex d:flex-row p:flex-col items-center gap-3 text-title rounded-[30px] bg-[rgba(255,255,255,.5)]"
            >
              <img src={items.image} alt="Item" />
              <p className="text-[18px] font-bold">{items.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <img
          src="https://wuling-ev.vn/Content/images/product/Frame2/img-card-about-model.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Section2;
