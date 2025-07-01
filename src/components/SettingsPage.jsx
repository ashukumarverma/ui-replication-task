import { useState } from "react";
import SettingsTabs from "./SettingsTabs.jsx";
import PersonalInfoForm from "./PersonalInfoForm.jsx";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="flex-1 primary-bg p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 rounded-md bg-[#F1F3F9] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <SettingsTabs activeTab={activeTab} onTabClick={setActiveTab} />
      <div>
        {activeTab === 0 && (
          <div className="relative">
            <PersonalInfoForm />
            <div className="flex items-center justify-end mt-8 space-x-2">
              <button className="px-5 py-2 rounded-md border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50">Cancel</button>
              <button className="px-5 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700">Save</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default SettingsPage; 