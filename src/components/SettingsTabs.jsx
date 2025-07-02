import { useState } from "react";

const tabs = [
  "My details",
  "Company Profile",
  "Appearance",
  "Team",
  "Billing and Plan",
  "Notifications",
  "Integrations",
];

const SettingsTabs = ({ activeTab = 0, onTabClick }) => {
  const [notificationCount, setNotificationCount] = useState(2); // default notification count 2 as in ui instructions
  return (
    <div className="flex space-x-6 border-b border-gray-200 mb-8 overflow-x-auto">
      {tabs.map((tab, idx) => (
        <button
          key={tab}
          className={`py-3 px-1 whitespace-nowrap font-medium text-sm border-b-2 transition-colors duration-200 ${
            activeTab === idx
              ? "border-[#099250] text-brand-secondary-700"
              : "border-transparent text-gray-500 hover:text-green-600"
          } flex items-center`}
          onClick={() => onTabClick && onTabClick(idx)}
        >
          {tab}
          {tab === "Notifications" && notificationCount > 0 && (
            <div
              className={`utility-gray-50 utility-gray-200 h-[22px] w-[24px] ml-1 text-xs rounded-full font-medium flex items-center justify-center`}
              onClick={() => setNotificationCount(0)}
            >
              {notificationCount}
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default SettingsTabs;
