import React, { useRef, useState } from 'react';
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

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
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
    <div className='w-full lg:w-hidden h-20 md:h-32 mb-4 lg:mb-0 lg:static fixed bottom-15 left-0 right-0 lg:mx-4 lg:rounded-2xl flex 
      bg-[rgba(255,255,255,0.05)] backdrop-blur-md text-white z-40'>

      {/* Left: Image + Info */}
      <div className='flex items-center gap-4 px-4 w-1/3'>
        <img src={image2} alt="song" className="w-16 h-16 rounded-md object-cover shadow-md p-2" />
        <div>
          <p className='font-semibold text-sm'>Song Name</p>
          <p className='text-xs text-gray-300'>Artist Name</p>
        </div>
      </div>

      {/* Center: Controls */}
      <div className='w-1/3 flex items-center justify-center gap-6'>
        <MdSkipPrevious className='hidden md:inline text-3xl cursor-pointer text-[rgb(1,238,254)]' />
        {isPlaying ? (
          <FaRegPauseCircle className='text-4xl cursor-pointer text-[rgb(1,238,254)]' onClick={togglePlay} />
        ) : (
          <FaRegPlayCircle className='text-4xl cursor-pointer text-[rgb(1,238,254)]' onClick={togglePlay} />
        )}
        <MdSkipNext className='text-3xl cursor-pointer text-[rgb(1,238,254)]' />
      </div>

      {/* Right: Volume + Icons */}
      <div className='w-1/3 flex items-center justify-end gap-5 px-6'>
        <div className="flex items-center gap-2">
          {isMuted ? (
            <IoVolumeMute className="text-xl cursor-pointer" onClick={toggleMute} />
          ) : (
            <IoVolumeHigh className="text-xl cursor-pointer" onClick={toggleMute} />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={changeVolume}
            className="w-24 h-1 accent-cyan-400"
          />
        </div>
        <FaRegHeart className="cursor-pointer text-xl text-gray-300" />
        <FaCirclePlus className="cursor-pointer text-xl text-gray-300" />
      </div>

      <audio ref={audioRef} src="/your-audio-file.mp3" preload="auto" />
    </div>
  );
};

export default MusicPlayer;
