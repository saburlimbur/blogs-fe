import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import Input from '../../elements/Fields/Input';
import ProfileSidebar from './ProfileSidebar';

const Sidebar = () => {
  return (
    <section className="h-full p-6 flex flex-col bg-white text-gray-800 shadow-xl rounded-r-[50px] justify-between">
      <div>
        <h2 className="text-2xl font-semibold mb-8 text-indigo-600">Dashboard</h2>

        <div className="flex flex-col justify-start items-center space-y-8">
            {/* serach article */}
          <div className="w-full max-w-sm">
            <p className="text-sm text-gray-500 mb-2">Search Author</p>
            <div className="relative">
              <AiOutlineUser className="absolute left-3 text-xl text-gray-500 top-1/2 transform -translate-y-1/2" />
              <Input placeholder="Search..." className="w-full pl-10 pr-4 rounded-full border border-gray-300 bg-white text-gray-800 p-4 transition-colors duration-300" />
            </div>
          </div>

          {/* categori */}
          <div className="w-full max-w-sm border-l border-l-gray-100 pl-2">
            <p className="text-sm text-gray-500 mb-2 ">All Categories</p>
            <h2 className="text-lg hover:text-gray-800  hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200">UI/UX Design</h2>
            <h2 className="text-lg hover:text-gray-800  hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200">Machine Learning</h2>
            <h2 className="text-lg hover:text-gray-800  hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200">Artificial Intelligence</h2>
            <h2 className="text-lg hover:text-gray-800  hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200">Web Development</h2>
            <h2 className="text-lg hover:text-gray-800  hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200">Frontend Development</h2>
            <h2 className="text-lg hover:text-gray-800  hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200">Backend Development</h2>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        {/* <p>© 2024 saburlimbur - pejuangsubuh</p> */}
        <ProfileSidebar />
      </div>
    </section>
  );
};

export default Sidebar;
