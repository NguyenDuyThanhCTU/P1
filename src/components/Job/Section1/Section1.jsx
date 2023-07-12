import React from "react";

const Section1 = () => {
  return (
    <div className="h-[750px] relative pb-20">
      <div>
        <img
          src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/co-hoi-nghe-nghiep/2021/living-our-purpose-1366x560.jpg"
          alt="img"
          className=" d:h-full w-full p:h-[400px] object-cover object-center bg-center"
        />
      </div>
      <div className="d:w-[556px] p:w-[90vw] absolute px-10 py-5 p:bottom-2 d:bottom-32 d:right-40 p:right-0 bg-white rounded-3xl shadow-lg">
        <h3 className="text-redPrimmary text-content">
          <strong className="text-black ">Tôn chỉ</strong> Mục đích
        </h3>
        <p className="text-normal py-2">
          Tôn chỉ mục đích của Prudential là giúp mọi người đạt được những điều
          tốt đẹp nhất trong cuộc sống. Prudential mang đến giải pháp chăm sóc
          sức khỏe toàn diện với chi phí hợp lý, giúp bảo vệ tài chính và gia
          tăng tài sản, đồng thời giúp mọi người lên kế hoạch tối ưu cho các mục
          tiêu của cuộc đời.
        </p>
      </div>
    </div>
  );
};

export default Section1;
