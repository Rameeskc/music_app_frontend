import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLayout from '../components/user/layout/UserLayout';
import Home from '../pages/user/Home';
import FullPlayer from '../pages/user/FullPlayer';

const User = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/fullplayer" element={<FullPlayer />} />
    </Routes>
  );
};

export default User;
