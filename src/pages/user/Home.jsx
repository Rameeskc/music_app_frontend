import React from 'react'
import NavBar from '../../components/user/NavBar';
import Sidebar from '../../components/user/Sidebar'
import BottomBar from'../../components/user/BottomBar'

const Home = () => {
  return (
    <div className='flex h-screen w-screen'>
      
        <Sidebar />
      
      <div className='flex flex-col grow'>
        <NavBar />
        <div className='grow'></div>
        <BottomBar/>
      </div>
      </div>

  )
}

export default Home