import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLayout from '../components/user/layout/UserLayout';
import Home from '../pages/user/Home';

const User = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default User;
