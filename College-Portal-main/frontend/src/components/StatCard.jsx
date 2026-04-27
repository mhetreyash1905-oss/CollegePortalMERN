import React from "react";

const StatCard = ({ title, value, change, icon, color, progressColor }) => {
  const isPositive = change && parseFloat(change) > 0;
  
  const colorClasses = {
    blue: "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400",
    green: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    purple: "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400",
    orange: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    teal: "bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400",
  };

  const progressColors = {
    blue: "bg-primary-500",
    green: "bg-emerald-500",
    purple: "bg-violet-500",
    orange: "bg-amber-500",
    teal: "bg-secondary-500",
  };

  return (
    <div className="bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-700 rounded-xl p-5 transition-all duration-200 hover:shadow-md group">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2.5 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
        {change && (
          <div
            className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
              isPositive 
                ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20" 
                : "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20"
            }`}
          >
            <span>{isPositive ? "↗" : "↘"}</span>
            <span>{change}</span>
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-0.5">{value}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{title}</p>
      
      <div className="w-full bg-gray-100 dark:bg-dark-700 rounded-full h-1 overflow-hidden">
        <div
          className={`h-full ${progressColors[progressColor || color]} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: "75%" }}
        ></div>
      </div>
    </div>
  );
};

export default StatCard;
