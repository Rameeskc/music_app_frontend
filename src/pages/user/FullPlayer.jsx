import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaRegPlayCircle, FaRegPauseCircle, FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuShuffle } from "react-icons/lu";
import { FaCirclePlus } from "react-icons/fa6";
import image2 from '../../images/image2.jpg';

const FullPlayer = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', setAudioDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', setAudioDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const seekTime = parseFloat(e.target.value);
    if (audio) {
      audio.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="w-screen h-screen bg-[url('/4.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="w-full h-full p-10 bg-black/50 backdrop-blur-md flex flex-col items-center">

        <button
          className="self-start text-cyan-400 mb-6"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack className='text-2xl text-white' />
        </button>

        <h1 className="text-lg font-bold mb-6">Now Playing</h1>

        <div className="w-full flex-grow flex flex-col justify-start items-center">
          <img
            src={image2}
            alt="cover"
            className="w-full rounded-xl mb-6 shadow-xl"
          />

          {/* Song Info */}
          <div className='w-full flex items-center justify-between mb-6'>
            <div className='w-2/3 flex flex-col items-start'>
              <h2 className="text-lg font-semibold">Song Name</h2>
              <p className="text-sm text-gray-300">Artist Name</p>
            </div>
            <div className='w-1/3 flex justify-end'>
              <FaRegHeart className='text-2xl' />
            </div>
          </div>

          {/* Audio Seek Bar */}
          <div className="w-full flex flex-col gap-2 mb-8">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 accent-cyan-400 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400"
            />
            <div className="flex justify-between text-xs text-gray-300 px-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <button>
              <LuShuffle className='text-2xl'/>
            </button>
            <button className="text-5xl text-cyan-400">
              <MdSkipPrevious />
            </button>

            <button
              className="text-7xl text-cyan-400"
              onClick={togglePlay}
            >
              {isPlaying ? <FaRegPauseCircle /> : <FaRegPlayCircle />}
            </button>

            <button className="text-5xl text-cyan-400">
              <MdSkipNext />
            </button>
            <button>
              <FiRepeat className='text-2xl'/>
            </button>
          </div>
          <div className=' w-full flex justify-between px-2'>
            <button>
            <IoShareSocialOutline  className='text-2xl'/>
            </button>
            <button>
            <FaCirclePlus  className='text-2xl'/>
            </button>
          </div>
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src="/your-audio-file.mp3"
          preload="metadata"
        />
      </div>
    </div>
  );
};

export default FullPlayer;
