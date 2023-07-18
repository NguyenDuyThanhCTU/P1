import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col gap-14 ">
      <div className="w-full ">
        <div className="my-9   h-[700px] flex items-center">
          <div className="flex-1 my-14">
            <img
              src="https://wuling-ev.vn/uploads/files/img-2.jpg"
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="px-24 flex flex-col gap-5 ">
              <h3 className="text-title">Giải thưởng</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  {" "}
                  <img
                    src="https://wuling-ev.vn/Content/images/icon-cup.svg"
                    alt="cup"
                    className="w-5 h-5"
                  />{" "}
                  <p className="text-content text-right">
                    "Thương hiệu mạnh Việt Nam" năm 2009-2010
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  {" "}
                  <img
                    src="https://wuling-ev.vn/Content/images/icon-cup.svg"
                    alt="cup"
                    className="w-5 h-5"
                  />{" "}
                  <p className="text-content">
                    Top 10 "Thương hiệu nổi tiếng quốc gia" năm 2010
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  {" "}
                  <img
                    src="https://wuling-ev.vn/Content/images/icon-cup.svg"
                    alt="cup"
                    className="w-5 h-5"
                  />{" "}
                  <p className="text-content">
                    Huân chương lao động hạng Ba của Chủ tịch nước năm 2006
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  {" "}
                  <img
                    src="https://wuling-ev.vn/Content/images/icon-cup.svg"
                    alt="cup"
                    className="w-5 h-5"
                  />{" "}
                  <p className="text-content">
                    Bằng khen cho doanh nghiệp đạt thành tích xuất sắc trong sản
                    xuất kinh doanh của Thủ tướng chính phủ năm 2006
                  </p>
                </div>
              </div>

              <h3 className="text-title">Lĩnh vực kinh doanh ô tô điện </h3>
              <p className="text-content">
                Tháng 1/2023, TMT Motors ký kết hợp tác chiến lược với liên
                doanh của General Motors (Mỹ) - SGMW, trong đó: Liên doanh của
                General Motors cung cấp linh kiện, ủy quyền cho TMT Motors độc
                quyền sản xuất, lắp ráp và phân phối các dòng ô tô điện thương
                hiệu Wuling tại Việt Nam. Khởi đầu cho chiến lược mở rộng sang
                lĩnh vực kinh doanh ô tô điện, TMT Motors kỳ vọng tiếp tục mang
                tới bước đột phá bằng việc ra mắt Wuling HongGuang MiniEV - mẫu
                xe khai mở phân khúc ô tô điện mini tại Việt Nam, giúp người dân
                dễ dàng sở hữu phương tiện di chuyển thân thiện môi trường, an
                toàn, văn minh hơn.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[600px]">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/xedienmientay-cb391.appspot.com/o/img%2Fslide%2Fz4525458213451_51a5a634f25ee17c8251d4d290501f64.jpg?alt=media&token=f1f08e6a-fe44-42db-861e-52de24e399df"
          alt="introduction Img"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Section2;
