import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLayout from '../components/user/layout/UserLayout';
import Home from '../pages/user/Home';
import FullPlayer from '../pages/user/FullPlayer';
import Login from'../pages/user/Login'
import Signup from'../pages/user/Signup'


const User = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/fullplayer" element={<FullPlayer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default User;
