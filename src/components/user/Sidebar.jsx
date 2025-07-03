import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeadphones } from 'react-icons/fa';
import { GiMicrophone } from 'react-icons/gi';
import { PiClockCountdownFill } from 'react-icons/pi';
import { BiLibrary } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdHome } from 'react-icons/md';

const Sidebar = () => {
  const menuItems = [
    { id: 1, name: 'Home', link: '/', icon: MdHome },
    { id: 2, name: 'Artist', link: '/', icon: GiMicrophone },
    { id: 3, name: 'Latest', link: '/', icon: PiClockCountdownFill },
    { id: 4, name: 'Playlist', link: "/", icon: BiLibrary },
    // { id: 5, name: "Settings", link: "/", icon: IoSettingsOutline },
  ];

  return (
    <div className="hidden lg:flex flex-col h-screen w-64 bg-[rgb(40,40,40)] backdrop-blur-md shadow-lg m-4 rounded-2xl">
      <div className="flex items-center justify-center h-16 mt-4 p-4">
        <FaHeadphones className="text-[rgb(1,238,254)] text-3xl" />
        <p className="font-Pacifico ml-3 text-2xl text-slate-200 select-none">MoonBeats</p>
      </div>

      <nav className="mt-12 flex-grow">
        <ul className="flex flex-col p-4">
          {menuItems.map(({ id, name, link, icon: Icon }) => (
            <li key={id}>
              <Link
                to={link}
                className="flex items-center gap-5 text-slate-200 hover:text-[rgb(1,238,254)] hover:bg-slate-800/50 rounded-2xl px-6 py-3 transition transform hover:scale-105"
              >
                <Icon className="text-2xl" />
                <span className="font-semibold text-lg select-none">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
