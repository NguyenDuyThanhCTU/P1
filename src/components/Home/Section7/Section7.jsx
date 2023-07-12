import React, { useState } from "react";
import { HomeSection7Videos } from "../../../Utils/temp";
import "swiper/css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosSquare } from "react-icons/io";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
const Section7 = () => {
  const [DropDown, setIsDropDown] = useState(0);

  const HandleDropdown = (idx) => {
    if (idx === DropDown) {
      setIsDropDown(0);
    } else {
      setIsDropDown(idx);
    }
  };
  return (
    <div>
      <div className="  flex flex-col gap-2">
        <h3 className="text-content font-thin ">
          <strong className="font-bold text-black">
            Hãy cùng xem video về{" "}
          </strong>
          <br />
          Tôn chỉ Mục đích
        </h3>
        <p className="text-[18px] font-normal bg-white p-10 mr-28">
          Tôn chỉ mục đích của Prudential là giúp mọi người đạt được những điều
          tốt đẹp nhất trong cuộc sống. Prudential mang đến giải pháp chăm sóc
          sức khỏe toàn diện với chi phí hợp lý, giúp bảo vệ tài chính và gia
          tăng tài sản, đồng thời giúp mọi người lên kế hoạch tiết kiệm cho các
          mục tiêu của cuộc đời..
        </p>
      </div>
      <div className="my-20 w-full bg-white ">
        <div className="d:flex  justify-center p-5 p:hidden">
          <Swiper
            slidesPerView={3}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper "
          >
            {HomeSection7Videos.map((items) => (
              <SwiperSlide>
                <iframe
                  width="400"
                  height="300"
                  src={items.link}
                  title="YouTube video player"
                  frameborder="0"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="d:hidden  justify-center p-5 p:flex">
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper "
          >
            {HomeSection7Videos.map((items) => (
              <SwiperSlide>
                {/* <iframe
                  width="400"
                  height="300"
                  src={items.link}
                  title="YouTube video player"
                  frameborder="0"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-[18px] font-normal bg-white px-10 d:mr-28 p:mr-0 rounded-lg">
          <div
            className="text-[20px] font-bold py-10 cursor-pointer flex justify-between items-center"
            onClick={() => HandleDropdown(1)}
          >
            <h3> Tầm nhìn và Mục tiêu</h3>
            <div>
              {DropDown === 1 ? (
                <AiOutlineMinusCircle className="bg-[#1b365d] rounded-full text-white text-[50px]" />
              ) : (
                <AiOutlinePlusCircle className="bg-[#1b365d] rounded-full text-white text-[50px]" />
              )}
            </div>
          </div>
          <div
            className={`flex flex-col gap-5  duration-700 overflow-y-hidden ${
              DropDown === 1 ? "  d:h-[500px] p:h-[1500px]" : " h-[0px]"
            }`}
          >
            <p>
              <strong>Tầm nhìn:</strong> Là lựa chọn số 1 về bảo hiểm nhân thọ
              cho mọi gia đình Việt.
            </p>
            <p>
              <strong>Mục tiêu:</strong> Giúp mọi người đạt được những điều tốt
              đẹp trong cuộc sống.{" "}
            </p>
            <p>
              <strong>Cam kết của Prudential: </strong>Prudential luôn ưu tiên
              đặt khách hàng làm trọng tâm của doanh nghiệp, nhấn mạnh sự đơn
              giản, đề cao tính sáng tạo và kết nối nhân văn trong mọi hoạt động
              hướng đến khách hàng.
            </p>
            <strong>Thông điệp: </strong>
            <div className="flex items-start  gap-3 ">
              <div className="mt-2">
                <IoIosSquare className="text-[10px]  text-redPrimmary" />
              </div>
              <p>
                Với thông điệp "Luôn luôn lắng nghe. Luôn luôn thấu hiểu",
                Prudential đang mang đến các giải pháp bảo vệ tài chính và đầu
                tư gia tăng tài sản hiệu quả cho hơn 1,6 triệu khách hàng với
                đội ngũ hơn 200.000 Tư vấn viên chuyên nghiệp, 360 văn phòng
                Tổng Đại lý, Văn phòng giao dịch và Trung tâm phục vụ khách hàng
                tại 63 tỉnh thành trên cả nước, cùng mạng lưới 8 ngân hàng đối
                tác uy tín và hệ thống bảo lãnh viện phí tại hơn 366 bệnh viện
                và phòng khám. Prudential cũng là đơn vị tiên phong ứng dụng
                công nghệ hiện đại vào đơn giản hóa quy trình, nâng cao trải
                nghiệm khách hàng và hỗ trợ cộng đồng trên hành trình làm chủ
                sức khỏe cũng như cuộc sống của chính mình.
              </p>
            </div>
            <div className="flex items-start  gap-3 ">
              <div className="mt-2">
                <IoIosSquare className="text-[10px]  text-redPrimmary" />
              </div>

              <p>
                Năm 2019 ghi dấu hành trình 20 lan tỏa giá trị vững bền tại Việt
                Nam, Prudential ra mắt khẩu hiệu mới “Lắng nghe. Thấu Hiểu. Hành
                động.” khẳng định cam kết luôn đặt khách hàng làm trọng tâm
                trong mọi hoạt động, mang đến những giải pháp sáng tạo và toàn
                diện để đáp ứng nhu cầu ngày càng cao của khách hàng, đồng thời
                tạo ra sự kết nối dễ dàng hơn cho thế hệ khách hàng am hiểu công
                nghệ.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[18px] font-normal bg-white px-10 d:mr-28 p:mr-0 rounded-lg">
          <div
            className="text-[20px] font-bold py-10 cursor-pointer flex justify-between items-center"
            onClick={() => HandleDropdown(2)}
          >
            <h3> Biểu tượng Prudential</h3>
            <div>
              {DropDown === 2 ? (
                <AiOutlineMinusCircle className="bg-[#1b365d] rounded-full text-white text-[50px]" />
              ) : (
                <AiOutlinePlusCircle className="bg-[#1b365d] rounded-full text-white text-[50px]" />
              )}
            </div>
          </div>
          <div
            className={`flex flex-col gap-5  duration-700 overflow-y-hidden ${
              DropDown === 2 ? "  d:h-[870px] p:h-[1600px]" : " h-[0px]"
            }`}
          >
            <div className="flex  justify-center">
              <img
                src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/ve-prudential/2020/logo-prudential-animation.gif"
                alt="logo"
              />
            </div>
            <p>
              Nữ thần Prudence, được lấy cảm hứng từ tranh vẽ nữ thần Prudence
              của Ngài Joshua Reynolds, là gương mặt quen thuộc gắn liền với
              thương hiệu Prudential từ năm 1848. Nữ thần Prudence được biểu
              trưng cho 4 yếu tố: sự thận trọng, sự công bằng, liêm chính và
              tính cách chuẩn mực. Từ thời Hy Lạp và La Mã cổ, nữ thần Prudence
              đã được hình tượng hoá dưới hình tượng một người phụ nữ nắm giữ
              một con rắn và chiếc gương soi. Tính cách thận trọng được thể hiện
              thông qua việc ghi nhớ thông tin, sự thông tuệ và sự nhìn xa trông
              rộng; điều này được thể hiện qua việc hiểu biết về quá khứ, hiện
              tại lẫn tương lai.
            </p>
            <p>
              Logo thương hiệu Prudential được chính thức đi vào sử dụng từ năm
              1986 với câu khẩu hiệu “Luôn luôn lắng nghe. Luôn luôn thấu hiểu.”
              và biểu tượng Prudence đã được cải tiến nhưng vẫn giữ nét cơ bản
              như trước.
            </p>
            <p>
              Từ năm 2019, Prudential làm mới nhận diện thương hiệu nhằm thể
              hiện đúng tinh thần và cam kết thương hiệu mới. Prudential của hôm
              nay không chỉ lắng nghe và thấu hiểu mà còn hành động.
            </p>
            <p>
              Logo thương hiệu mới với dải lụa đỏ uyển chuyển đính kèm, thể hiện
              cho tinh thần năng động; tư duy hướng về phía trước nhằm đáp ứng
              tốt nhất các nhu cầu của khách hàng kết hợp cùng câu khẩu hiệu mới
              “Lắng nghe. Thấu hiểu. Hành Động.” như một lời cam kết HÀNH ĐỘNG
              cùng khách hàng vì một cuộc sống tốt đẹp hơn với những giải pháp
              tối ưu, sáng tạo và giàu tính nhân văn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
