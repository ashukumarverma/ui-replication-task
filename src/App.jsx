import "./App.css";
import SettingsPage from "./components/SettingsPage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="w-full min-h-screen flex">
      <div>
        <button
          className={`md:hidden fixed ${
            sidebarOpen ? "bg-red-600" : "bg-green-600"
          } top-4 right-4 z-50 text-white p-2 rounded shadow`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Open sidebar"
        >
          {sidebarOpen ? (
            <span className="px-2 font-extrabold">X</span>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <aside
          className={`fixed top-0 left-0 h-screen w-64 z-40 bg-[#F8F9FB] border-r border-gray-200 transition-transform duration-200 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <Sidebar />
        </aside>
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </div>
      <div className="flex-1 flex flex-col md:pl-64 w-full">
        <SettingsPage />
      </div>
    </div>
  );
}

export default App;
