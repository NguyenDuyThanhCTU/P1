import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Section8 = () => {
  return (
    <div className="flex flex-col gap-32 py-20 ">
      <div className="flex justify-between items-center d:flex-row p:flex-col p-2">
        <div className="p:w-auto  d:w-[500px] flex flex-col gap-2">
          <h3 className="text-content">
            <strong>Hội đồng thành viên và Ban lãnh đạo</strong>
          </h3>

          <div className="flex items-center gap-1 font-bold text-normal cursor-pointer">
            <p>Xem chi tiết</p>{" "}
            <BsArrowRightShort className="text-redPrimmary text-[40px]" />
          </div>
        </div>
        <div>
          <img
            className="w-[630px]"
            src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/ve-prudential/doi-ngu-lanh-dao.png"
            alt="img"
          />
        </div>
      </div>
      <div className="flex justify-between items-center d:flex-row p:flex-col p-2">
        <div>
          <img
            className="w-[630px]"
            src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/ve-prudential/2020/ve-prudential-chien-dich-khi-tinh-yeu-du-lon-666x444.jpg"
            alt="img"
          />
        </div>
        <div className=" p:w-auto  d:w-[500px] flex flex-col gap-2">
          <h3 className="text-content">
            <strong> Chiến dịch thương hiệu</strong>
          </h3>
          <p className="text-[18px] ">
            Khi TÌNH YÊU ĐỦ LỚN, mọi trở ngại sẽ đều trở nên nhỏ bé. Prudential
            lắng nghe, thấu hiểu và mong muốn biến tình yêu ấy của bạn trở thành
            hành động cho những người bạn yêu thương.
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

export default Section8;
