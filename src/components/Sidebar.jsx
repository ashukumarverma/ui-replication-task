const Sidebar = () => {
  return (
    <aside className="w-64 h-full md:h-screen bg-[#F8F9FB] flex flex-col justify-between border-r border-gray-200 md:relative fixed top-0 left-0 z-50 overflow-y-auto max-h-screen md:max-h-none">
      {/* Top Section: Search and Navigation */}
      <div>
        {/* Search Bar */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 rounded-md bg-[#F1F3F9] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Navigation Links */}
        <nav className="mt-2">
          <ul className="space-y-1">
            <li><a href="#" className="block px-6 py-2 text-gray-700 hover:bg-green-50 rounded-l-full font-medium">Dashboard</a></li>
            <li><a href="#" className="block px-6 py-2 text-gray-700 hover:bg-green-50 rounded-l-full font-medium">Product</a></li>
            <li><a href="#" className="block px-6 py-2 text-gray-700 hover:bg-green-50 rounded-l-full font-medium">Customer</a></li>
            <li><a href="#" className="block px-6 py-2 text-gray-700 hover:bg-green-50 rounded-l-full font-medium">Marketing</a></li>
            <li><a href="#" className="block px-6 py-2 text-gray-700 hover:bg-green-50 rounded-l-full font-medium">Reporting</a></li>
          </ul>
        </nav>
      </div>
      {/* Bottom Section: Settings, Support, Used Space, User Info */}
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <span>Settings</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Online</span>
        </div>
        <div className="text-gray-600 text-sm">Support</div>
        <div className="bg-[#F1F3F9] rounded-lg p-3 text-xs text-gray-600">
          <div className="flex justify-between items-center mb-1">
            <span>Used space</span>
            <span className="text-green-600 font-semibold">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <div className="flex justify-between items-center">
            <span>Your team has used 80% of your available space.</span>
            <button className="ml-2 text-green-600 font-medium">Upgrade plan</button>
          </div>
        </div>
        {/* User Info */}
        <div className="flex items-center space-x-3 mt-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold text-white">C</div>
          <div>
            <div className="font-medium text-gray-800">Clara Smith</div>
            <div className="text-xs text-gray-500">clara@bizclues.com</div>
          </div>
          <button className="ml-auto text-gray-400 hover:text-gray-600">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 