import { useState } from "react";
import SettingsTabs from "./SettingsTabs.jsx";
import PersonalInfoForm from "./PersonalInfoForm.jsx";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className={`flex-1 bg-primary p-4 pb-12 xl:px-6`}>
      <div className={`flex flex-col md:flex-row md:justify-between gap-2`}>
        <h1 className={`py-4 text-3xl text-primary-900`}>Settings</h1>
        <div className={`px-4 relative flex items-center`}>
          <div
            className={`absolute left-6 top-1/2 transform -translate-y-1/2 p-2`}
          >
            <img src={`/assets/search.svg`} alt="Search" />
          </div>
          {/* Search input */}
          <input
            type="text"
            placeholder="Search"
            className={`w-full px-10 py-2 rounded-md border-primary focus:outline-none focus:ring-2`}
          />
          <div
            className={`absolute right-6 top-1/2 transform -translate-y-1/2 p-[5px] border-secondary rounded-md`}
          >
            <img src={`/assets/Shortcut.svg`} alt="Shortcut" />
          </div>
        </div>
      </div>
      <SettingsTabs activeTab={activeTab} onTabClick={setActiveTab} />
      <div>
        {activeTab === 0 && (
          <div className={`relative`}>
            <PersonalInfoForm />
            <div className={`flex items-center justify-end mt-8 space-x-2`}>
              <button
                className={`px-5 py-2 button-secondary-border text-secondary-700 rounded-md`}
              >
                Cancel
              </button>
              <button className={`px-5 py-2 button-primary-bg rounded-md`}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default SettingsPage;
