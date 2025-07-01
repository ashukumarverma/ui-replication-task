import { useState } from "react";
const Sidebar = () => {
  const [isStorageAlert, setIsStorageAlert] = useState(true);

  return (
    <aside
      className={`w-74 h-full md:h-screen bg-primary flex flex-col justify-between border-r border-secondary md:relative fixed top-0 left-0 z-50 overflow-y-auto max-h-screen md:max-h-none`}
    >
      {/* Top section: logo, search bar, and navigation links */}
      <div>
        {/* Logo section */}
        <div className={`ml-4 mt-6 flex items-center gap-4`}>
          <img src="/assets/logo.png" alt="Logo" />

          {/* Placeholder for brand name */}
          <div className={`w-[97px] h-[32px] rounded-sm`}> </div>
        </div>

        {/* Search bar */}
        <div className={`p-4 relative flex items-center`}>
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

        {/* Navigation menu links */}
        <nav className={`mt-2 text-secondary-700`}>
          <ul className={`space-y-1`}>
            {/* menu items with icons */}
            <li className={`flex px-6 py-2 gap-3`}>
              <img src={`/assets/dashboard.svg`} alt="dashboard" /> <a href="#">Dashboard</a>
            </li>
            <li className={`flex px-6 py-2 gap-3`}>
              <img src={`/assets/product.svg`} alt="product" /> <a href="#">Product</a>
            </li>
            <li className={`flex px-6 py-2 gap-3`}>
              <img src={`/assets/customers.svg`} alt="customers" /> <a href="#">Customer</a>
            </li>
            <li className={`flex px-6 py-2 gap-3`}>
              <img src={`/assets/plane.svg`} alt="marketing" /> <a href="#">Marketing</a>
            </li>
            <li className={`flex px-6 py-2 gap-3`}>
              <img src={`/assets/piechart.svg`} alt="reporting" /> <a href="#">Reporting</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom section */}
      <div className={`p-4 space-y-4 `}>
        <div className={`flex items-center justify-between px-2`}>
          <div className={`flex items-center gap-2`}>
            <img src={`/assets/settings-01.svg`} alt={`Settings`} />
            <span className={`text-secondary-700`}>Settings</span>
          </div>
        </div>

        {/* Support section with online status */}
        <div className={`flex items-center justify-between px-2`}>
          <div className={`flex items-center gap-2`}>
            <img src={`/assets/support.svg`} alt={`Support`} />
            <span className={`text-secondary-700`}>Support</span>
          </div>
          {/* Online status indicator */}
          <div
            className={`border-primary text-secondary-700 flex gap-1 h-[22px] w-[61px] items-center justify-center rounded-md text-xs`}
          >
            <div
              className={`w-[6px] h-[6px] utility-success-500 rounded-full`}
            ></div>
            Online
          </div>
        </div>

        {/* Storage usage alert card */}
        <div
          className={`bg-secondary rounded-lg px-3 py-2 ${
            isStorageAlert ? "" : "hidden"
          }`}
        >
          <div className={`flex justify-between items-center`}>
            <span className={`text-primary-900`}>Used space</span>
            <button onClick={() => setIsStorageAlert(false)}>
              <img src={`/assets/Button-close-X.svg`} alt={`Close`} />
            </button>
          </div>

          {/* Description of storage usage */}
          <div className={`flex text-xs text-tertiary-600 items-center pb-2`}>
            <span>
              Your team has used 80% of your available space. Need more?
            </span>
          </div>

          {/* Progress bar showing 80% usage */}
          <div className={`w-full my-2 bg-gray-200 rounded-full h-1.5 mb-2`}>
            <div
              className={`bg-[#099250] h-1.5 rounded-full`}
              style={{ width: "80%" }}
            ></div>
          </div>

          {/* Action buttons */}
          <div className={`flex text-xs gap-1`}>
            <button
              className={`button-tertiary-fg font-medium`}
              onClick={() => setIsStorageAlert(false)}
            >
              Dismiss
            </button>
            <button className={`ml-2 button-tertiary-color-fg`}>
              Upgrade plan
            </button>
          </div>
        </div>

        {/* User profile section */}
        <div
          className={`flex items-center space-x-3 mb-1 p-2 rounded-xl border-secondary bg-white relative`}
        >
          {/* User avatar with online status */}
          <div
            className={`w-10 h-10 rounded-full border-2 border-black/8 relative`}
          >
            <div
              className={`absolute bottom-0 right-0 w-[10px] h-[10px] utility-success-500 rounded-full`}
            ></div>
          </div>

          {/* User name and email */}
          <div>
            <div className={`text-sm text-primary-900`}>Clara Smith</div>
            <div className={`text-xs text-tertiary-600`}>
              clara@bizclues.com
            </div>
          </div>

          {/* Dropdown button */}
          <button
            className={`absolute right-1 top-1 h-8 w-8 Component button-tertiary-bg_hover flex items-center justify-center rounded-md`}
          >
            <img src={`/assets/chevron-selector-vertical.svg`} alt="Dropdown" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
