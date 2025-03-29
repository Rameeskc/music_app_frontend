import React from 'react'
import { FaHeadphones } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className=' h-screen w-1/5 bg-amber-300'>
        <div className=' w-full h-12 flex justify-center items-center bg-amber-400'>
            <FaHeadphones  className='text-[rgba(221,118,51)]'/>
            <p className=' font-Roboto'>music</p>
        </div>
    </div>
  )
}

export default Sidebar