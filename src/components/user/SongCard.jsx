import React, { useEffect, useRef, useState } from 'react';
import ColorThief from 'colorthief';

const SongCard = ({ image, name, artist, alpha = 1 }) => {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [bgColor, setBgColor] = useState('rgba(0, 0, 0, 0.05)');
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const img = imgRef.current;

    const handleLoad = () => {
      try {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        const rgba = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
        setBgColor(rgba);
      } catch (err) {
        console.warn('Color extraction failed:', err);
      }
    };

    if (img && img.complete) {
      handleLoad();
    } else if (img) {
      img.onload = handleLoad;
    }
  }, [image, alpha]);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsOverflowing(el.scrollWidth > el.clientWidth);
    }
  }, [artist]);

  return (
    <div
      className="w-full max-w-[180px] p-4 flex flex-col items-center rounded-xl transition-all duration-500"
      style={{ backgroundColor: bgColor }}
    >
      <img
        ref={imgRef}
        src={image}
        alt="song cover"
        crossOrigin="anonymous"
        className="w-32 h-32 object-cover rounded-lg mb-2"
      />
      <p className="text-white text-sm font-semibold text-center">{name}</p>

      {/* Artist name with conditional scroll on hover */}
      {isOverflowing ? (
        <div className="marquee-hover w-full" ref={textRef}>
          <span className="text-white text-sm">{artist}</span>
        </div>
      ) : (
        <p className="text-white text-sm text-center w-full truncate" ref={textRef}>
          {artist}
        </p>
      )}
    </div>
  );
};

export default SongCard;
