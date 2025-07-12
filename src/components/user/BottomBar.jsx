import React from 'react';
import { Link } from 'react-router-dom';
import { LiaHomeSolid } from 'react-icons/lia';
import { IoSearchOutline, IoHeartOutline } from 'react-icons/io5';
import { BiLibrary } from 'react-icons/bi';

const BottomBar = () => {
  const bottomItems = [
    { id: 1, name: 'Home', link: '/', icon: LiaHomeSolid },
    { id: 2, name: 'Search', link: '/', icon: IoSearchOutline },
    { id: 3, name: 'Favourite', link: '/', icon: IoHeartOutline },
    { id: 4, name: 'Artist', link: '/', icon: BiLibrary },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 h-20 z-50
      bg-black
      text-white
      
      shadow-[0_-4px_12px_rgba(0,0,0,0.6)]
    ">
      <ul className="flex h-full text-[rgb(176,176,176)] font-light items-center justify-evenly">
        {bottomItems.map(({ id, name, link, icon: Icon }) => (
          <li key={id}>
            <Link
              to={link}
              className="flex flex-col items-center justify-center gap-1 hover:text-orange-500 transition"
              aria-label={name}
            >
              <Icon className="text-2xl" />
              <p className="text-xs select-none">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar;
