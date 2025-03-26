import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from "../pages/user/Home"

const User = () => {
  return (
    <Routes>
        <Route path='/' element=<Home/> />
    </Routes>
  )
}

export default User