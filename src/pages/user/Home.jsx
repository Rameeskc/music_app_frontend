import React from 'react'
import NavBar from '../../components/user/NavBar';
import Sidebar from '../../components/user/Sidebar'

const Home = () => {
  return (
    <>
      <div className=' flex h-screen w-screen  bg-[rgba(11,14,23,255)]'>
        <Sidebar />
        <NavBar />
      </div>
    </>

  )
}

export default Home