import React from 'react';
import image from '../../images/image.jpg';

const BannerCard = () => {
  return (
    <div
      className="h-80 w-60 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg flex items-end  opacity-70"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="h-24 w-full bg-black/30 text-white flex items-center justify-center text-xl font-bold">
        <p>song</p>
        <p>artist</p>
      </div>
    </div>
  );
};

export default BannerCard;
