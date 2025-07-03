import React from 'react';
import image from '../../images/image.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpeg';
import image4 from '../../images/image4.jpeg';
import SongCard from './SongCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const SongList = () => {
  return (
    <div className="w-full px-4 py-6">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full"
      >
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image} name="Ocean Eyes" artist="Billie Eilish" />
        </SwiperSlide>
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image2} name="Golden Hour" artist="JVKE" />
        </SwiperSlide>
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image3} name="Blinding Lights" artist="The Weeknd" />
        </SwiperSlide>
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image4} name="Stay" artist="Justin Bieber & Kid LAROI" />
        </SwiperSlide>
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image} name="Ocean Eyes" artist="Billie Eilish" />
        </SwiperSlide>
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image2} name="Golden Hour" artist="JVKE" />
        </SwiperSlide>
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image3} name="Blinding Lights" artist="The Weeknd" />
        </SwiperSlide>
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image4} name="Stay" artist="Justin Bieber & Kid LAROI" />
        </SwiperSlide>
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image} name="Ocean Eyes" artist="Billie Eilish" />
        </SwiperSlide>
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image2} name="Golden Hour" artist="JVKE" />
        </SwiperSlide>
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image3} name="Blinding Lights" artist="The Weeknd" />
        </SwiperSlide>
        <SwiperSlide className="!w-[180px]">
          <SongCard image={image4} name="Stay" artist="Justin Bieber & Kid LAROI" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SongList;
