import React from "react";

import { HomeSection6Card } from "../../../Utils/item";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Section6 = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-start gap-2 ">
        <div className="h-1 w-[70px] bg-[#40b2b5] d:block p:hidden"></div>
        <h3 className="text-[44px] font-normal uppercase text-center">
          giới thiệu về công ty
        </h3>
      </div>
      <div>
        <div className="flex justify-center gap-20 items-center d:flex-row p:flex-col p-2">
          <div className="p:w-auto  d:w-[500px] flex flex-col gap-2">
            <h3 className="text-content font-thin text-redPrimmary">
              <strong className="font-bold text-black">Prudential </strong>
              <br /> Việt Nam
            </h3>
            <p className="text-[18px] font-normal">
              Prudential Việt Nam tự hào là thành viên của Tập đoàn Prudential,
              tập đoàn tài chính hàng đầu thế giới được thành lập từ năm 1848,
              có trụ sở chính tại Vương quốc Anh với bề dày lịch sử kinh doanh,
              phát triển bền vững, cam kết đầu tư lâu dài, an toàn và hiệu quả.
            </p>
          </div>
          <div>
            <img
              className="w-[630px]"
              src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/ve-prudential/2020/ve-prudential-hero-666x500.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="d:mx-40 p:mx-2 flex flex-col my-20 text-[18px] gap-5">
        <p>
          Công ty TNHH Bảo hiểm nhân thọ Prudential Việt Nam (“Prudential”) được
          thành lập và hoạt động theo Giấy phép thành lập và hoạt động số 15
          GP/KDBH do Bộ Tài chính cấp lại vào ngày 08 tháng 9 năm 2011; Giấy
          phép điều chỉnh số 15/GPĐC2/KDBH do Bộ Tài Chính cấp vào ngày 23 tháng
          9 năm 2015 và Giấy phép điều chỉnh số 15/GPĐC6/KDBH do Bộ Tài Chính
          cấp vào ngày 23 tháng 4 năm 2019, do ông Phương Tiến Minh – Tổng Giám
          đốc làm người đại diện theo pháp luật.
        </p>
        <p>
          <strong>Tên tiếng Anh:</strong> Prudential Viet Nam Assurance Private
          Limited.
        </p>
        <p>
          <strong>Hình thức pháp lý:</strong> Công ty TNHH một thành viên.
        </p>
        <p>
          <strong>Lĩnh vực kinh doanh:</strong> Bảo hiểm nhân thọ và đầu tư tài
          chính.
        </p>
        <p>
          <strong>Nghiệp vụ:</strong> kinh doanh bảo hiểm nhân thọ (bao gồm bảo
          hiểm trọn đời, bảo hiểm tử kỳ, bảo hiểm hỗn hợp, bảo hiểm liên kết đầu
          tư, bảo hiểm hưu trí, bảo hiểm sức khỏe độc lập và bảo hiểm sức khỏe
          bổ trợ cho bảo hiểm nhân thọ) và kinh doanh tái bảo hiểm.
        </p>
      </div>
      <div>
        <div className="d:grid grid-cols-2 gap-36 mx-36 mb-20 p:flex flex-col items-center">
          {HomeSection6Card.map((items) => (
            <Link to={items.link}>
              <div className="flex items-center d:w-[556px] bg-white rounded-xl shadow-xl relative p:p-2 d:p-0 p:w-screen">
                <img
                  src={items.image}
                  alt="img"
                  className="d:w-[266px] h-[354px] p:w-[166px] rounded-l-xl"
                />
                <div className=" py-4 px-8">
                  <h3 className="text-[24px] font-bold">{items.title}</h3>
                  <p className="font-light">{items.content}</p>
                </div>
                <div className="absolute -bottom-4 right-7">
                  <AiOutlineRight className="text-[35px] p-1 border-4 border-redPrimmary rounded-full bg-redPrimmary text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
