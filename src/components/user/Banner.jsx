import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import BannerCard from './BannerCard';
import image from '../../images/image.jpg';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className="w-full h-96 bg-black flex items-center justify-center z-10 px-4 mb-4">
   

      
      <Swiper
        className="w-full max-w-screen-lg mx-auto"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 40,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        autoplay={{
          delay: 1500, // ✅ delay in milliseconds (3 seconds)
          disableOnInteraction: false, // keep autoplay running after user swipes
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <SwiperSlide
            key={i}
            className="!w-64 flex justify-center items-center"
          >
            <BannerCard />
            {/* <img src={image} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
