import React from 'react'
import { Link } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiLibrary } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";


const NavBar = () => {

  const profile = [
    {
      id: 1,
      name: "Profile",
      link: "/",
      icon: FaRegCircleUser
    },
    {
      id: 2,
      name: "Playlist",
      link: "/",
      icon: BiLibrary
    },
    {
      id: 3,
      name: "Settings",
      link: "/",
      icon: IoSettingsOutline
    },

  ]

  return (

    <div className=' relative h-16 flex items-center justify-between lg:justify-end bg-[rgb(24,27,34)]'>
      <div className='flex '>
        <FaHeadphones className='text-orange-500 text-2xl lg:hidden ml-5' />
        <p className='lg:hidden font-Pacifico ml-2 text-xl text-slate-200'>MoonBeats</p>
      </div>
      <input
        type="text"
        placeholder='Search your song ....'
        className='hidden lg:block border-slate-200 border-2 h-10 w-72 placeholder:text-sm rounded-full focus:outline-none text-sm text-[rgb(176,176,176)] p-4  mr-16' />
      <button className='cursor-pointer'>
        <FaUserCircle className=' text-2xl text-slate-200 mr-5' />
      </button>
      <div className='absolute top-16 right-0 w-80 bg-amber-300 p-4 rounded-md shadow-md'>
        <ul className='space-y-2'>
          {profile.map((item) => (
            <li key={item.id} className='w-full h-14'>
              <Link to={item.link}>
                <div className='flex items-center gap-3 text-amber-950'>
                  <item.icon className='text-xl' />
                  <p>{item.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <button className='mt-6 w-full bg-amber-500 py-2 rounded-md text-white font-semibold'>
          Login
        </button>
      </div>

    </div>

  )
}

export default NavBar