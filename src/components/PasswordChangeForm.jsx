const PasswordChangeForm = () => {
  return (
    <form className="bg-white rounded-lg shadow-sm p-8 space-y-6 mt-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Change Password</label>
        <p className="text-xs text-gray-400 mb-4">Your new password must be different to previously used passwords.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Old Password</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" defaultValue="********" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">New Password</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" defaultValue="********" />
            <ul className="mt-2 text-xs text-gray-400 space-y-1">
              <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2"></span>Must be at least 8 characters</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2"></span>Must contain one special character</li>
            </ul>
          </div>
        </div>
      </div>
      <button type="submit" className="w-full md:w-auto bg-green-600 text-white px-6 py-2 rounded-md font-medium mt-4">Reset password</button>
    </form>
  );
};

export default PasswordChangeForm; 