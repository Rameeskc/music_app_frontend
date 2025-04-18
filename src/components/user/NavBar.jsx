import React from 'react'
import { FaHeadphones } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className=' w-screen lg:w-4/5 h-10 bg-[rgb(24,27,34)]'>
      <FaHeadphones className='text-orange-500 text-2xl lg:hidden' />
    </div>
  )
}

export default NavBar