const tabs = [
  "My details",
  "Company Profile",
  "Appearance",
  "Team",
  "Billing and Plan",
  "Notifications",
  "Integrations"
];

const SettingsTabs = ({ activeTab = 0, onTabClick }) => {
  return (
    <div className="flex space-x-6 border-b border-gray-200 mb-8 overflow-x-auto">
      {tabs.map((tab, idx) => (
        <button
          key={tab}
          className={`py-3 px-1 whitespace-nowrap font-medium text-sm border-b-2 transition-colors duration-200 ${
            activeTab === idx
              ? "border-[#099250] text-brand-secondary-700"
              : "border-transparent text-gray-500 hover:text-green-600"
          }`}
          onClick={() => onTabClick && onTabClick(idx)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SettingsTabs; 