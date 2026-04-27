import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  RxDashboard, 
  RxPerson, 
  RxReader, 
  RxFileText, 
  RxBarChart,
  RxExit 
} from "react-icons/rx";
import { 
  MdPeople, 
  MdBook, 
  MdAssignment,
  MdSchool,
  MdEvent
} from "react-icons/md";

const Sidebar = ({ menuItems, selectedMenu, onMenuSelect, userType, isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const iconMap = {
    home: <RxDashboard className="text-lg" />,
    student: <MdPeople className="text-lg" />,
    faculty: <RxPerson className="text-lg" />,
    branch: <MdSchool className="text-lg" />,
    notice: <RxFileText className="text-lg" />,
    exam: <MdAssignment className="text-lg" />,
    subjects: <MdBook className="text-lg" />,
    admin: <RxPerson className="text-lg" />,
    timetable: <MdEvent className="text-lg" />,
    material: <RxReader className="text-lg" />,
    marks: <RxBarChart className="text-lg" />,
    "student info": <MdPeople className="text-lg" />,
  };

  const logoutHandler = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userType");
    navigate("/login");
  };

  const userTypeColors = {
    Admin: "bg-primary-600",
    Faculty: "bg-secondary-600",
    Student: "bg-primary-500",
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen && setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <div 
        className={`w-64 bg-white dark:bg-dark-800 border-r border-gray-200 dark:border-dark-700 h-screen flex flex-col fixed left-0 top-0 z-50 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo Section */}
        <div className="px-5 py-5 border-b border-gray-100 dark:border-dark-700 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 ${userTypeColors[userType] || "bg-primary-600"} rounded-lg flex items-center justify-center shadow-sm`}>
              <MdSchool className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-gray-900 dark:text-white font-bold text-base leading-tight">College Portal</h1>
              <p className="text-gray-400 dark:text-gray-500 text-[10px] uppercase tracking-wider font-semibold">{userType} Panel</p>
            </div>
          </div>
          {/* Close button on mobile */}
          <button 
            className="md:hidden text-gray-400 hover:text-gray-600 dark:hover:text-white p-1"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            <RxExit className="text-lg rotate-180" />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 overflow-y-auto py-4 px-3">
          <p className="text-gray-400 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest px-3 mb-2">
            Menu
          </p>
          <nav className="space-y-0.5">
            {menuItems.map((item) => {
              const isActive = selectedMenu === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onMenuSelect(item.id);
                    if (setIsOpen) setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                    isActive 
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-semibold" 
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-700 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <span className={isActive ? "text-primary-600 dark:text-primary-400" : ""}>
                    {iconMap[item.id] || <RxDashboard className="text-lg" />}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-3 border-t border-gray-100 dark:border-dark-700">
          <button
            onClick={logoutHandler}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all duration-150"
          >
            <RxExit className="text-lg" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
