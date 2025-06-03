import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeadphones } from 'react-icons/fa';
import { GiMicrophone } from 'react-icons/gi';
import { PiClockCountdownFill } from 'react-icons/pi';
import { MdHome } from 'react-icons/md';

const Sidebar = () => {
  const menuItems = [
    { id: 1, name: 'Home', link: '/', icon: MdHome },
    { id: 2, name: 'Artist', link: '/', icon: GiMicrophone },
    { id: 3, name: 'Latest', link: '/', icon: PiClockCountdownFill },
  ];

  return (
    <div className="hidden lg:flex flex-col h-screen w-72 bg-transparent backdrop-blur-md border-r border-slate-700 shadow-lg">
      <div className="flex items-center justify-center h-16 mt-4 p-4">
        <FaHeadphones className="text-orange-500 text-3xl" />
        <p className="font-Pacifico ml-3 text-2xl text-slate-200 select-none">MoonBeats</p>
      </div>

      <nav className="mt-12 flex-grow">
        <ul className="flex flex-col gap-4 p-4">
          {menuItems.map(({ id, name, link, icon: Icon }) => (
            <li key={id}>
              <Link
                to={link}
                className="flex items-center gap-5 text-slate-200 hover:text-orange-500 hover:bg-slate-800/50 rounded-2xl px-6 py-3 transition transform hover:scale-105"
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
