import { useState } from "react";

const PasswordChangeForm = () => {
  // both password values for the form for tracking user input and validation from backend
  const [password, setPassword] = useState("********");
  const [newPassword, setNewPassword] = useState("********");

  return (
    <div
      className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
    >
      {/* Left side with title and instructions */}
      <div className={`xl:min-w-[300px] flex flex-col max-md:mb-1 `}>
        <label className={`text-sm text-secondary-700 mb-1`}>
          Change Password
        </label>
        <p className={`text-sm text-tertiary-600 xl:w-[210px]`}>
          Your new password must be different to previously used passwords.
        </p>
      </div>

      {/* Right side with the actual password form */}
      <div className={`flex flex-col gap-5 flex-1 max-md:mx-auto`}>
        {/* Old password input */}
        <div className={`flex flex-col text-[#414651]`}>
          <label htmlFor="old-password" className={`text-xs font-[500] mb-2`}>
            Old Password
          </label>
          <input
            type="password"
            className={`md:w-[360px] w-full px-3 py-2 border-primary rounded-md focus:outline-none focus:ring-1 font-semibold tracking-widest`}
            placeholder="old password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* New password input */}
        <div className={`flex flex-col text-[#414651]`}>
          <label htmlFor="new-password" className={`text-xs font-[500] mb-2`}>
            New Password
          </label>
          <input
            type="password"
            className={`md:w-[360px] w-full px-3 py-2 border-primary rounded-md focus:outline-none focus:ring-1 font-semibold tracking-widest`}
            placeholder="new password"
            defaultValue={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        {/* Password requirements with checkmark icons */}
        <ul className={`text-sm text-tertiary-600 space-y-3`}>
          <li className={`flex items-center gap-2`}>
            <img src={`/assets/Check-icon.svg`} alt="check-icon" />
            Must be at least 8 characters
          </li>
          <li className={`flex items-center gap-2`}>
            <img src={`/assets/Check-icon.svg`} alt="check-icon" />
            Must contain one special character
          </li>
        </ul>

        {/* Submit button for password reset */}
        <button
          type="button"
          className={`px-5 py-2 w-[360px]  button-primary-bg rounded-md self-start`}
        >
          Reset password
        </button>
      </div>
    </div>
  );
};

export default PasswordChangeForm;
