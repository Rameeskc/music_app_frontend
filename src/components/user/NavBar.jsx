import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHeadphones, FaUserCircle, FaRegUser } from 'react-icons/fa';
import { BiLibrary } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

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
    <div
      ref={navbarRef}
      className="relative z-50 h-16 flex items-center justify-between lg:justify-end bg-transparent px-6 shadow-lg backdrop-blur-md"
    >
      <div className="flex items-center">
        <FaHeadphones className="text-[rgb(1,238,254)] text-2xl lg:hidden" />
        <p className="lg:hidden font-Pacifico ml-2 text-xl text-slate-200 select-none">MoonBeats</p>
      </div>

      <input
        type="text"
        placeholder="Search your song..."
        className="hidden lg:block border border-slate-600 bg-[rgba(255,255,255,0.05)] h-10 w-80 placeholder:text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(1,238,254)] text-sm text-slate-300 px-5 mr-6 transition"
      />

      <div className="relative z-50" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-[rgb(1,238,254)] rounded-full p-1"
          aria-haspopup="true"
          aria-expanded={open}
        >
          <FaUserCircle className="text-3xl text-slate-200 hover:text-[rgb(1,238,254)] transition" />
        </button>

        <div
          className={`absolute right-[-20px] top-14 w-72 h-96 bg-black border border-[rgb(1,238,254)] rounded-2xl shadow-2xl p-5
                      transition-all duration-300 origin-top-right transform flex flex-col justify-between
    ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
  `}
        >
          {/* Profile List */}
          <ul className="space-y-4 leading-relaxed">
            {profile.map(({ id, name, link, icon: Icon }) => (
              <li key={id}>
                <Link
                  to={link}
                  className="flex items-center gap-3 text-white hover:text-[rgb(1,238,254)] transition font-semibold text-lg"
                >
                  <Icon className="text-xl" />
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Login Button pushed to bottom */}
          <button
            className="w-full bg-[rgb(1,238,254)] hover:bg-[rgb(1,238,254)] active:bg-[rgb(1,238,254)] transition text-white py-3 rounded-full font-semibold shadow-lg"
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
