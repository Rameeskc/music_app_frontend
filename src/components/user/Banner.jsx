import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import BannerCard from './BannerCard';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className="w-full bg-black flex items-center justify-center px-5 z-10 relative">
      <Swiper
        className="w-full max-w-6xl"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 11,
          depth: 100,
          modifier: 1,
          scale: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <SwiperSlide key={i} className="!w-64">
            <BannerCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
