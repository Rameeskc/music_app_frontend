import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import BottomBar from '../BottomBar';
import Sidebar from '../Sidebar';

const UserLayout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="hidden lg:flex flex-col h-full w-72 shrink-0">
        <Sidebar />
      </div>
      <div className="flex flex-col grow overflow-hidden">
        <NavBar />
        <div className="grow overflow-auto">
          <Outlet />
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default UserLayout;
