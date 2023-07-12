import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Section5 = () => {
  return (
    <div className="flex flex-col gap-32 pb-20">
      <div className="p:flex  items-center d:flex-row p:flex-col p-2 gap-36 justify-center">
        <div className="p:w-auto  d:w-[500px] flex flex-col gap-2">
          <h3 className="text-content">
            <strong>Pulse</strong> Sống Cân Bằng
          </h3>
          <p className="text-[48px] font-light">
            Chủ động đặt hẹn với chuyên viên tài chính Prudential
          </p>
          <div className="flex items-center gap-1 font-bold text-normal cursor-pointer">
            <p>Xem chi tiết</p>{" "}
            <BsArrowRightShort className="text-redPrimmary text-[40px]" />
          </div>
        </div>
        <div>
          <img
            className="w-[630px] rounded-xl"
            src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/trang-chu/promo-matchbook-666x444.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="p:flex  items-center d:flex-row p:flex-col p-2 gap-36 justify-center">
        <div>
          <img
            className="w-[630px] rounded-xl"
            src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/trach-nhiem-xa-hoi/csr-hero-666x444.jpg"
            alt="img"
          />
        </div>
        <div className=" p:w-auto  d:w-[500px] flex flex-col gap-2">
          <h3 className="text-content">
            <strong>Phát triển</strong> cộng đồng bền vững
          </h3>
          <p className="text-[18px] ">
            Bên cạnh hoạt động kinh doanh hiệu quả, Prudential đã và đang đầu tư
            vào các hoạt động xã hội với mục tiêu phát triển cộng đồng bền vững
            và kiến tạo một cuộc sống khỏe mạnh hơn, thịnh vượng hơn cho người
            dân Việt Nam, tập trung vào các lĩnh vực Giáo dục, Sống khỏe và An
            toàn.
          </p>
          <div className="flex items-center gap-1 font-bold text-normal cursor-pointer">
            <p>Xem chi tiết</p>{" "}
            <BsArrowRightShort className="text-redPrimmary text-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
