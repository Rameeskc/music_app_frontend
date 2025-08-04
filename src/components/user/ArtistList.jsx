import React from 'react';
import image from '../../images/arjith.jpeg';
import image1 from '../../images/ar.jpeg';
import image2 from '../../images/ani.jpeg';
import image3 from '../../images/bad.jpeg';
import image4 from '../../images/pritam.jpeg';
import ArtistCard from './ArtistCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const ArtistList = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          freeMode={true}
          modules={[FreeMode]}
          className="w-full"
        >
          <SwiperSlide className="!w-[180px]">
            <ArtistCard image={image} artist="Arijit Singh" />
          </SwiperSlide>
          <SwiperSlide className="!w-[180px]">
            <ArtistCard image={image1} artist="A.R. Rahman" />
          </SwiperSlide>
          <SwiperSlide className="!w-[180px]">
            <ArtistCard image={image2} artist="Anirudh Ravichander" />
          </SwiperSlide>
          <SwiperSlide className="!w-[180px]">
            <ArtistCard image={image3} artist="Badshah" />
          </SwiperSlide>
          <SwiperSlide className="!w-[180px]">
            <ArtistCard image={image4} artist="Pritam" />
          </SwiperSlide> <SwiperSlide className="!w-[180px]">
            <ArtistCard image={image4} artist="Pritam" />
          </SwiperSlide> <SwiperSlide className="!w-[180px]">
            <ArtistCard image={image4} artist="Pritam" />
          </SwiperSlide> <SwiperSlide className="!w-[180px]">
            <ArtistCard image={image4} artist="Pritam" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ArtistList;
