import React from "react";

const Section1 = () => {
  return (
    <div className="h-[750px] relative d:pb-20 p:pb-0">
      <div>
        <img
          src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/chien-dich-thuong-hieu/2023/minh-con-co-nhau/MCCN_CorpWebHOMEPAGE_Main-banner-WEB_1366-x-560px_Couple.jpg"
          alt="img"
          className=" d:h-full w-full p:h-[400px] object-cover object-center bg-center"
        />
      </div>
      <div className="d:w-[556px] p:w-[90vw] absolute p-10 p:bottom-2 d:bottom-32 d:right-40 p:right-0 bg-white rounded-3xl shadow-lg">
        <h3 className="text-redPrimmary text-content">
          <strong className="text-black ">Mình còn</strong> cần nhau?
        </h3>
        <p className="text-normal py-4">
          Xuất phát điểm là người trụ cột, ta đều mong muốn làm mọi thứ cho
          người thân của mình. Nhưng điều họ “cần” mới là nền tảng để có hạnh
          phúc bền lâu. Khi nào ta còn cho nhau được thứ người kia cần, khi nào
          ta còn cảm thấy cần nhau, thì khi ấy gia đình mới bền vững.{" "}
        </p>
        <div className="font-bold bg-redPrimmary hover:scale-110 duration-300 hover:shadow-2xl  text-white w-[150px] rounded-3xl py-3 px-6 cursor-pointer">
          Xem chi tiết{" "}
        </div>
      </div>
    </div>
  );
};

export default Section1;
