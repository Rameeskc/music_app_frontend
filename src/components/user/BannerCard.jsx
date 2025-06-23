import React from 'react';
import image from '../../images/image.jpg';
import { IoPlayCircle } from "react-icons/io5";

const BannerCard = () => {
  return (
    <div className="relative h-80 w-60 rounded-xl shadow-lg overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content */}
      <div className="relative h-full w-full flex items-end">
        <div className="h-24 w-full flex text-xl font-bold text-white">
          <div className="w-4/6 h-full flex flex-col justify-center pl-4">
            <p className="w-full">song</p>
            <p className="w-full pt-1 text-sm">artist</p>
          </div>
          <div className="w-2/6 h-full flex items-center justify-center">
            <IoPlayCircle className="text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
