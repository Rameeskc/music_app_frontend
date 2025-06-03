import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHeadphones, FaUserCircle, FaRegUser } from 'react-icons/fa';
import { BiLibrary } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const profile = [
    { id: 1, name: "Profile", link: "/", icon: FaRegUser },
    { id: 2, name: "Playlist", link: "/", icon: BiLibrary },
    { id: 3, name: "Settings", link: "/", icon: IoSettingsOutline },
  ];

  const toggleDropdown = () => setOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mouseup', handleClickOutside);
    return () => document.removeEventListener('mouseup', handleClickOutside);
  }, []);

  return (
    <div className="relative h-16 flex items-center justify-between lg:justify-end bg-transparent px-6 shadow-lg backdrop-blur-md border-b border-slate-700">
      <div className="flex items-center">
        <FaHeadphones className="text-orange-500 text-2xl lg:hidden" />
        <p className="lg:hidden font-Pacifico ml-2 text-xl text-slate-200 select-none">MoonBeats</p>
      </div>

      <input
        type="text"
        placeholder="Search your song..."
        className="hidden lg:block border border-slate-600 bg-[rgba(255,255,255,0.05)] h-10 w-80 placeholder:text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-slate-300 px-5 mr-6 transition"
      />

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-full p-1"
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="User menu"
        >
          <FaUserCircle className="text-3xl text-slate-200 hover:text-orange-500 transition" />
        </button>

        {/* Dropdown */}
        <div
          className={`absolute right-0 top-14 w-72 bg-black/30 backdrop-blur-md border border-orange-600 rounded-2xl shadow-2xl p-5
            transition-all duration-300 origin-top-right transform
            ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
          `}
          style={{ transformOrigin: 'top right' }}
        >
          <ul className="space-y-4 leading-relaxed">
            {profile.map(({ id, name, link, icon: Icon }) => (
              <li key={id}>
                <Link
                  to={link}
                  className="flex items-center gap-3 text-orange-300 hover:text-white transition font-semibold text-lg"
                >
                  <Icon className="text-2xl" />
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="mt-8 w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition text-white py-3 rounded-full font-semibold shadow-lg shadow-orange-600/50"
            onClick={() => alert('Login clicked!')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
