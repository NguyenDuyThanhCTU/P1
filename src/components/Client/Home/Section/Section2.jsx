import React from "react";

const Section2 = () => {
  return (
    <div className="d:h-[100vh] p:h-auto py-4 w-full flex font-Montserrat items-center d:flex-row p:flex-col d:gap-0 p:gap-10">
      <div className="d:px-[100px] d:w-[40%] p:px-2 p:w-auto">
        <div className="flex flex-col gap-7 text-[#666666]">
          <h3 className="text-[32px] text-black font-light">Về chúng tôi</h3>
          <p>
            TMT Motors là doanh nghiệp sản xuất, lắp ráp và phân phối các dòng
            xe thương mại uy tín tại Việt Nam với bề dày xấp xỉ 50 năm kinh
            nghiệm hoạt động. Với Sứ mệnh "Giúp người dân Việt Nam dễ dàng sở
            hữu ô tô thân thiện môi trường với mức giá trong tầm tay", tháng
            1/2023, TMT Motors ký kết hợp tác chiến lược với liên doanh của
            General Motors (Mỹ) - SGMW để độc quyền sản xuất, lắp ráp và phân
            phối các dòng ô tô điện thương hiệu Wuling tại Việt Nam.
          </p>
          <p>
            Khởi đầu cho chiến lược mở rộng sang lĩnh vực kinh doanh ô tô điện,
            TMT Motors kỳ vọng tiếp tục mang tới bước đột phá bằng việc ra mắt
            <span className="text-blue-600"> Wuling HongGuang MiniEV</span> -
            mẫu xe khai mở phân khúc ô tô điện mini tại Việt Nam.
          </p>

          <div className=" text-blue-600  ">
            <div>
              <span className=" text-[15px] border  border-blue-600 py-3 px-8">
                Đọc thêm
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="d:w-[60%] p:w-auto">
        <img
          src="https://wuling-ev.vn/uploads/files/Social%2001%20W2%20Apr.png"
          alt="img"
          className="d:h-[98vh] p:h-[30vh] w-full"
        />
      </div>
    </div>
  );
};

export default Section2;
