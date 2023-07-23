import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { ProductSection1Items } from "../../../../Utils/temp";
import { Link } from "react-scroll";

const Section1 = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "" + "</span>";
    },
  };
  return (
    <a href="/order">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="mySwiper cursor-pointer"
      >
        {ProductSection1Items.map((items, idx) => (
          <SwiperSlide>
            <img
              src={items.image}
              alt="banner"
              className="h-[90vh] object-cover w-full "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </a>
  );
};

export default Section1;
