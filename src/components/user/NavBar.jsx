import React from 'react'
import { FaHeadphones } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (

    <div className=' h-16 flex items-center justify-between lg:justify-end bg-[rgb(24,27,34)]'>
      <FaHeadphones className='text-orange-500 text-2xl lg:hidden ml-5' />
      <FaUserCircle className=' text-2xl text-amber-50 mr-5' />
    </div>

  )
}

export default NavBar