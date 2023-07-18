import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { ProductSection1Items } from "../../../../Utils/temp";

const Section1 = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {ProductSection1Items.map((items, idx) => (
          <SwiperSlide>
            <img
              src={items.image}
              alt="banner"
              className="h-[90vh] object-cover w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Section1;
