import React from 'react'
import { Link } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { BiLibrary } from "react-icons/bi";
import { IoHeartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const BottomBar = () => {

  const Bottom = [
    {
      id: 1,
      name: "Home",
      link: "/",
      icon: LiaHomeSolid
    },
    {
      id: 2,
      name: "Search",
      link: "/",
      icon: IoSearchOutline
    },
    {
      id: 3,
      name: "Favourite",
      link: "/",
      icon: IoHeartOutline
    },
    {
      id: 4,
      name: "Artist",
      link: "/",
      icon: BiLibrary

    }
  ]

  return (
    <div className=' lg:hidden h-20 bg-[rgb(24,27,34)]'>
      <ul className=' flex h-20 text-[rgb(176,176,176)] font-light items-center justify-evenly'>
        {Bottom.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>
             <div className=' flex flex-col items-center justify-center'>
            <item.icon className='text-3xl '/>
            <p className=' text-[12px]'>{item.name}</p>
              
            </div> 
            </Link>


          </li>
        ))}
      </ul>
    </div>
  )
}

export default BottomBar