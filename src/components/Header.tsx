import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center min-w-0">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-lg font-semibold text-gray-900 leading-tight">Logo</h1>
            <p className="text-xs text-gray-500 leading-tight">placement</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search accounts"
              className="w-full pl-12 pr-4 py-3 border border-black-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-gray-400 bg-white"
            />
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="text-gray-400 w-5 h-5 hover:text-gray-600 cursor-pointer" />
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-white text-sm font-semibold">JD</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 leading-tight">John Doe</p>
              <p className="text-xs text-gray-500 leading-tight">john123@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;