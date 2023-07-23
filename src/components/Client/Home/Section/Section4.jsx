import React from "react";
import { HomeSection4Items } from "../../../../Utils/temp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
import { useData } from "../../../../Context/DataProviders";
const Section4 = () => {
  const { TradeMarkData } = useData();

  return (
    <div className="h-[894px] w-full flex flex-col items-center ">
      <div className="w-[900px] overflow-hidden flex flex-col items-center ">
        <div className="mt-5  pb-2 flex flex-col items-center">
          <img
            src={TradeMarkData.websiteLogo}
            alt="logo"
            className="w-[120px] h-[120px]"
          />
          <h3 className="uppercase font-LexendDeca font-light -tracking-tighter mt-5">
            Xe điện miền tây
          </h3>
          <span className="h-[1px] w-16 bg-blue-500 mt-5"></span>
        </div>

        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="  "
        >
          {HomeSection4Items.map((items, idx) => (
            <SwiperSlide>
              <div className="flex flex-col items-center gap-5 font-Montserrat ">
                <div>
                  <img
                    src={items.image}
                    alt="img"
                    className="w-[700px] h-[495px]"
                  />
                </div>
                <h3 className="font-light text-[34px]">{items.name}</h3>
                <p>Giá từ: {items.price}</p>
                <div className="grid gap-2 grid-cols-2">
                  <div className="px-10 py-2 bg-blue-500 text-white text-center">
                    Đặt cọc
                  </div>
                  <div className="px-10 py-2 bg-white border-blue-500 border-2">
                    Xem chi tiết
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section4;
