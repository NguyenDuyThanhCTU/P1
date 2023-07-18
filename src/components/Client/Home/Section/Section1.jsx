import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { useData } from "../../../../Context/DataProviders";

const Section1 = () => {
  const { Slides } = useData();

  return (
    <div>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper  "
      >
        {Slides?.map((items, idx) => (
          <SwiperSlide>
            <Link to="">
              <div className="d:block p:hidden">
                <img
                  src={items.image}
                  alt=""
                  key={idx}
                  className="h-[90vh] w-full object-cover "
                />
              </div>
              <div className="d:hidden p:block">
                <img
                  src={items.image}
                  alt=""
                  key={idx}
                  className="h-[30vh] w-full object-contain "
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section1;
