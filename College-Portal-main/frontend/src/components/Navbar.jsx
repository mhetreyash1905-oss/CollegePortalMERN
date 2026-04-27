import React from "react";
import { FiLogOut, FiSun, FiMoon } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import CustomButton from "./CustomButton";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
  const router = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const logouthandler = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userType");
    navigate("/login");
  };

  return (
    <div className="glass-effect shadow-2xl px-6 py-5 mb-6 sticky top-0 z-50 border-b border-white/20 backdrop-blur-xl animate-slide-down">
      <div className="max-w-7xl flex justify-between items-center mx-auto">
        <p
          className="font-bold text-2xl flex justify-center items-center cursor-pointer gradient-text hover:scale-105 transition-transform duration-300"
          onClick={() => navigate("/")}
        >
          <span className="mr-3 text-3xl">
            <RxDashboard />
          </span>
          {router.state && router.state.type} Dashboard
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 shadow-sm hover:shadow transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-dark-700"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>
          <button 
            onClick={logouthandler}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            Logout
            <span className="text-lg">
              <FiLogOut />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
