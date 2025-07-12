import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const Chips = () => {
  const categories = [
    'Relax', 'Sad', 'Party', 'Romance', 'Energetic', 'Jazz',
    'Alternative', 'Pop', 'Hip-Hop', 'Rock', 'Chill', 'Workout',
  ];

  return (
    <div className="w-full px-4 my-4">
      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="!w-fit">
            <div className="px-4 py-2 bg-[rgb(40,40,40)] text-white text-sm rounded-full text-center border border-[rgb(1,238,254)] hover:bg-[rgb(3,155,166)] transition whitespace-nowrap">
              {category}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Chips;
