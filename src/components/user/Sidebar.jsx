import React from 'react'
import { Link } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import { IoAlbumsSharp } from "react-icons/io5";
import { MdLibraryMusic } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {

  const menu = [
    {
      id: 1,
      name: "Home",
      link: "/",
      icon: MdHome
    }, 
    {
      id: 2,
      name: "Artist",
      link: "/",
      icon: GiMicrophone
    }, 
    {
      id: 3,
      name: "Albums",
      link: "/",
      icon: IoAlbumsSharp
    }, 
    {
      id: 4,
      name: "Likes",
      link: "/",
      icon: FaHeart
    }, 
    {
      id: 5,
      name: "Playlist",
      link: "/",
      icon: MdLibraryMusic
    },

  ]

  return (
    <div className=' h-screen w-1/5 bg-[rgb(24,27,34)]'>
      <div className=' w-full h-12 flex justify-center items-center mt-4'>
        <FaHeadphones className='text-orange-500 text-2xl' />
        <p className=' font-Pacifico ml-2 text-xl text-orange-500'>MoonBeats</p>
      </div>
      <div className='mt-12 '>
        <ul className="space-y-4 p-4 ml-4">
          {menu.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className="flex items-center gap-2 text-white hover:text-orange-500">
                <item.icon className="text-xl" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2 ml-4 text-white hover:text-orange-500 p-4">
        <IoLogOut />
        <p>LogOut</p>
      </div>
    </div>
  )
}

export default Sidebar