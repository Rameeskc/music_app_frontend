import React from 'react'
import { FaHeadphones } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (

    <div className=' h-16 flex items-center justify-between lg:justify-end bg-[rgb(24,27,34)]'>
      <div className='flex '>
        <FaHeadphones className='text-orange-500 text-2xl lg:hidden ml-5' />
        <p className=' font-Pacifico ml-2 text-xl text-slate-200'>MoonBeats</p>
      </div>
      <input
        type="text"
        placeholder='Search your song ....'
        className='hidden lg:block border-slate-200 border-2 h-10 w-72 placeholder:text-sm rounded-4xl focus:outline-none text-sm text-[rgb(176,176,176)] p-4  mr-16' />
      <FaUserCircle className=' text-2xl text-slate-200 mr-5' />
    </div>

  )
}

export default NavBar