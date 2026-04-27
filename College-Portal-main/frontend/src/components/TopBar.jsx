import React, { useState } from "react";
import { RxMagnifyingGlass, RxBell, RxHamburgerMenu } from "react-icons/rx";
import { FiSun, FiMoon, FiSearch, FiX } from "react-icons/fi";
import { useTheme } from "../Context/ThemeContext";

const TopBar = ({ title, subtitle, setSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 md:px-8 py-4 md:py-5 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left: Hamburger + Title */}
        <div className="flex items-center gap-3">
          <button 
            className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-all"
            onClick={() => setSidebarOpen && setSidebarOpen(prev => !prev)}
          >
            <RxHamburgerMenu className="text-xl" />
          </button>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white truncate max-w-[200px] sm:max-w-none">{title}</h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm truncate max-w-[200px] sm:max-w-none">{subtitle}</p>
          </div>
        </div>
        
        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-56 text-sm transition-all"
            />
            <RxMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>

          {/* Mobile Search Toggle */}
          <button 
            className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-all"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            {searchOpen ? <FiX className="text-lg" /> : <FiSearch className="text-lg" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-700 transition-all"
            aria-label="Toggle Theme"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-all"
              onClick={() => setNotifOpen(!notifOpen)}
            >
              <RxBell className="text-lg" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Notifications Dropdown */}
            {notifOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setNotifOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl shadow-xl z-50 overflow-hidden animate-fadeIn">
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-dark-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <div className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-700 border-b border-gray-100 dark:border-dark-700 cursor-pointer transition-colors">
                      <p className="text-sm text-gray-900 dark:text-gray-200 font-medium">Mid Semester Exam Schedule</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Mid semester exams start from 15 March</p>
                      <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">2 hours ago</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-700 border-b border-gray-100 dark:border-dark-700 cursor-pointer transition-colors">
                      <p className="text-sm text-gray-900 dark:text-gray-200 font-medium">Workshop on AI</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Open workshop for students and faculty</p>
                      <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">5 hours ago</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-700 cursor-pointer transition-colors">
                      <p className="text-sm text-gray-900 dark:text-gray-200 font-medium">New Study Material Uploaded</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">DSA Unit 1 Notes are now available</p>
                      <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">1 day ago</p>
                    </div>
                  </div>
                  <div className="px-4 py-2.5 border-t border-gray-200 dark:border-dark-700 text-center">
                    <button className="text-xs text-primary-600 dark:text-primary-400 font-semibold hover:underline">View All Notifications</button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* User Avatar */}
          <div className="hidden sm:flex items-center gap-2 ml-1 pl-2 border-l border-gray-200 dark:border-dark-700">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              A
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Expanded */}
      {searchOpen && (
        <div className="mt-3 md:hidden animate-fadeIn">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="w-full bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-400 pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
            <RxMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
