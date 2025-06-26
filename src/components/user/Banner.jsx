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
    <div className="w-full h-96 bg-black flex items-center justify-center z-10 px-4 mt-4 mb-4">
      {/* <Swiper
      // className="flex h-full w-full items-center justify-center"
      effect="coverflow"
      grabCursor={true}
        centeredSlides={true}
        preventClicks={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 40,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
      >
     <SwiperSlide ><BannerCard /></SwiperSlide>
     <SwiperSlide ><BannerCard /></SwiperSlide>
     <SwiperSlide ><BannerCard /></SwiperSlide>

      
      </Swiper> */}

      
      <Swiper
        className="w-full max-w-screen-lg mx-auto"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
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
