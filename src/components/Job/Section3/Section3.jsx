import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Section3 = () => {
  return (
    <div className="flex flex-col gap-32 py-20 p-2">
      <div className="flex justify-center d:gap-44 p:gap-5 items-center d:flex-row p:flex-col">
        <div className="p:w-auto  d:w-[500px] flex flex-col gap-2">
          <h3 className="text-content">
            <strong>Kết nối, Phát triển, Thành Công</strong>
          </h3>
          <p className="text-[18px] ">
            Chúng tôi thấu hiểu niềm tin mà bạn trao cho chúng tôi bằng cách
            không ngừng đưa Prudential trở thành một nơi làm việc tuyệt vời, nơi
            mà bạn có thể Kết nối, Phát triển và Thành công.
          </p>
          <div className="flex items-center gap-1 font-bold text-normal">
            <p>Tìm hiểu thêm</p>{" "}
            <BsArrowRightShort className="text-redPrimmary text-[40px]" />
          </div>
        </div>
        <div>
          <img
            className="p:w-auto d:w-[630px]"
            src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/co-hoi-nghe-nghiep/2021/connect-grow-succeed-666x444.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="flex justify-center d:gap-44 p:gap-5 items-center  d:flex-row p:flex-col">
        <div>
          <img
            className="w-[630px]"
            src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/co-hoi-nghe-nghiep/2021/career-opportunities-666x444.jpg"
            alt="img"
          />
        </div>
        <div className=" p:w-auto d:w-[500px] flex flex-col gap-2">
          <h3 className="text-content">
            <strong>Khám phá cơ hội tuyển dụng tại Prudential Việt Nam</strong>
          </h3>
          <p className="text-[18px] ">
            Hãy theo dõi trang tuyển dụng của chúng tôi để tìm hiểu các cơ hội
            mới.
          </p>
          <div className="flex items-center gap-1 font-bold text-normal">
            <p>Xem các cơ hội nghề nghiệp tại đây</p>{" "}
            <BsArrowRightShort className="text-redPrimmary text-[40px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center d:gap-44 p:gap-5  d:flex-row p:flex-col items-center ">
        <div className="p:w-auto  d:w-[500px] flex flex-col gap-2">
          <h3 className="text-content">
            <strong>Đoàn kết thông qua tinh thần đồng đội</strong>
          </h3>
          <p className="text-[18px] ">
            Tại Prudential, chúng tôi luôn đổi mới, hợp tác và cùng nhau trải
            nghiệm thực tế. Sức mạnh để chia sẻ và cộng tác đòi hỏi sự tôn
            trọng, chính trực và tinh thần đồng đội. Prudential sở hữu một di
            sản phong phú nhưng để hướng tới sự phát triển trong tương lai,
            chúng tôi cần những nguồn năng lượng mới và suy nghĩ mới.
          </p>
        </div>
        <div>
          <img
            className=" w-[630px]"
            src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/co-hoi-nghe-nghiep/2021/united-through-teamwork-666x444.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
