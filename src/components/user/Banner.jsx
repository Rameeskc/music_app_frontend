import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import BannerCard from './BannerCard';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className="h-96 w-full bg-black">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : 'auto'} // responsive
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-4xl mx-auto"
      >
        <SwiperSlide>
          <BannerCard/>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            src="/images/slide2.jpg"
            className="rounded-xl object-cover w-96 h-64"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slide3.jpg"
            className="rounded-xl object-cover w-96 h-64"
            alt="Slide 3"
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
