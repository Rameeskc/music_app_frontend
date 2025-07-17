import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaRegPlayCircle, FaRegPauseCircle, FaRegHeart } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import image2 from '../../images/image2.jpg';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const handleInfoClick = () => {
    if (window.innerWidth < 768) {
      navigate('/fullplayer');
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const changeVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
      audioRef.current.muted = newVolume === 0;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const newMuteStatus = !isMuted;
    setIsMuted(newMuteStatus);
    audioRef.current.muted = newMuteStatus;
  };

  return (
    <div className='w-full md:w-[calc(100%-24px)] h-20 md:h-32 mb-4 lg:static fixed bottom-15 left-0 right-0 mr-6 lg:rounded-2xl flex 
      bg-[rgba(255,255,255,0.05)] backdrop-blur-md text-white z-40'>

      {/* Left: Image + Info */}
      <div className='flex items-center gap-4 px-4 w-2/3 md:w-1/3'>
  <div
    onClick={handleInfoClick}
    role="button"
    tabIndex={-1}
    className="flex items-center gap-4 cursor-pointer select-none"
  >
    <img
      src={image2}
      alt="song"
      className="w-16 h-16 rounded-md object-cover shadow-md p-2 pointer-events-none"
    />
    <div className="pointer-events-none select-none">
      <p className='font-semibold text-sm'>Song Name</p>
      <p className='text-xs text-gray-300'>Artist Name</p>
    </div>
  </div>
</div>

      {/* Right on small screen only */}
      <div className="flex items-center justify-end w-1/3 pr-3 gap-4 md:hidden">
        {isPlaying ? (
          <FaRegPauseCircle
            className='text-4xl text-[rgb(1,238,254)] cursor-pointer'
            onClick={togglePlay}
          />
        ) : (
          <FaRegPlayCircle
            className='text-4xl text-[rgb(1,238,254)] cursor-pointer'
            onClick={togglePlay}
          />
        )}
        <MdSkipNext className='text-3xl text-[rgb(1,238,254)] cursor-pointer' />
      </div>

      {/* Center controls on medium+ screens */}
      <div className='hidden md:flex w-1/3 items-center justify-center gap-6'>
        <MdSkipPrevious className='text-3xl text-[rgb(1,238,254)] cursor-pointer' />
        {isPlaying ? (
          <FaRegPauseCircle
            className='text-4xl text-[rgb(1,238,254)] cursor-pointer'
            onClick={togglePlay}
          />
        ) : (
          <FaRegPlayCircle
            className='text-4xl text-[rgb(1,238,254)] cursor-pointer'
            onClick={togglePlay}
          />
        )}
        <MdSkipNext className='text-3xl text-[rgb(1,238,254)] cursor-pointer' />
      </div>

      {/* Right controls on medium+ screens */}
      {/* Right controls on medium+ screens */}
<div className="hidden md:flex w-1/3 items-center justify-end gap-5 px-6 select-none">
  <div className="flex items-center gap-2">
    {/* Mute/Unmute Toggle */}
    {isMuted ? (
      <IoVolumeMute
        className="text-xl cursor-pointer"
        onClick={toggleMute}
        role="button"
        tabIndex={0}
      />
    ) : (
      <IoVolumeHigh
        className="text-xl cursor-pointer"
        onClick={toggleMute}
        role="button"
        tabIndex={0}
      />
    )}

    {/* Volume Slider */}
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={changeVolume}
      className="w-24 h-1 accent-cyan-400 cursor-pointer"
    />
  </div>

  {/* Heart Icon */}
  <FaRegHeart
    className="text-xl text-gray-300 cursor-pointer"
    role="button"
    tabIndex={0}
  />

  {/* Add to Playlist Icon */}
  <FaCirclePlus
    className="text-xl text-gray-300 cursor-pointer"
    role="button"
    tabIndex={0}
  />
</div>


      <audio ref={audioRef} src="/your-audio-file.mp3" preload="auto" />
    </div>
  );
};

export default MusicPlayer;
