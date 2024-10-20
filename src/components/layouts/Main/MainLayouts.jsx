import React from 'react';
import Sidebar from '../../template/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Profile from '../../template/Profile/Profile';

const MainLayouts = () => {
  return (
    <main className="w-full h-screen flex">
      <div className="w-1/6 text-white h-full sticky top-0">
        <Sidebar />
      </div>
      <div className="flex-1 bg-white p-6 overflow-y-auto">
        <Outlet />
      </div>
      {/* <div className="w-1/5 bg-gray-100">
        <Profile />
      </div> */}
    </main>
  );
};

export default MainLayouts;
