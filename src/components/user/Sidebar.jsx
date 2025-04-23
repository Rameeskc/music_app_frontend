import React from 'react'
import { Link } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import { IoAlbumsSharp } from "react-icons/io5";
import { PiClockCountdownFill } from "react-icons/pi";
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
      name: "Latest",
      link: "/",
      icon: PiClockCountdownFill
    },


  ]

  return (
    <div className='hidden lg:block h-screen w-[280px] bg-[rgb(24,27,34)]'>
      <div className=' w-full h-12 flex justify-center items-center mt-4 p-2'>
        <FaHeadphones className='text-orange-500 text-2xl' />
        <p className=' font-Pacifico ml-2 text-xl text-slate-200'>MoonBeats</p>
      </div>
      <div className='mt-12  '>
        <ul className=" p-2 lg:p-4 ">
          {menu.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className="flex h-12 w-full items-center pl-6 rounded-2xl gap-6 text-slate-200 hover:text-slate-700 hover:bg-slate-200 transition ease-out duration-300 hover:scale-110 ">
                <item.icon className="text-lg" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Sidebar