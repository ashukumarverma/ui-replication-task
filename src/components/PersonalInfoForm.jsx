import { useState } from "react";

// Country list with code, name, and flag
const countries = [
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
];

// Timezone list with value and label
const timezones = [
  { value: "PST", label: "Pacific Standard Time (PST) UTC-08:00" },
  { value: "EST", label: "Eastern Standard Time (EST) UTC-05:00" },
  { value: "CST", label: "Central Standard Time (CST) UTC-06:00" },
  { value: "MST", label: "Mountain Standard Time (MST) UTC-07:00" },
  { value: "GMT", label: "Greenwich Mean Time (GMT) UTC+00:00" },
  { value: "CET", label: "Central European Time (CET) UTC+01:00" },
  { value: "IST", label: "Indian Standard Time (IST) UTC+05:30" },
  { value: "AEST", label: "Australian Eastern Standard Time (AEST) UTC+10:00" },
  { value: "JST", label: "Japan Standard Time (JST) UTC+09:00" },
  { value: "CST", label: "China Standard Time (CST) UTC+08:00" },
];

const PersonalInfoForm = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [timezone, setTimezone] = useState(timezones[0].value);
  const [bio, setBio] = useState(
    "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
  );

  return (
    <form className={`bg-primary`}>
      {/* Personal Info Section */}
      <div
        className={`flex flex-col xl:flex-row xl:items-center xl:justify-between mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
      >
        <div>
          <h2 className={`text-lg font-medium text-[#181D27] mb-1`}>
            Personal info
          </h2>
          <p className={`text-sm text-tertiary-600`}>
            Update your photo and personal details here.
          </p>
        </div>
        <div className={`flex items-center justify-end space-x-2`}>
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

      {/* Name Fields */}
      <div
        className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
      >
        <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
          Name <span className={`text-brand-tertiary-600`}>*</span>
        </label>
        <div className={`flex gap-4 pt-1 xl:pt-0`}>
          <input
            type="text"
            className={`xl:w-[244px] w-full px-3 py-2 border-primary rounded-md focus:outline-none focus:ring-1`}
            placeholder="First name"
            defaultValue="Clara"
          />
          <input
            type="text"
            className={`xl:w-[244px] w-full px-3 py-2 border-primary rounded-md focus:outline-none focus:ring-1`}
            placeholder="Last name"
            defaultValue="Smith"
          />
        </div>
      </div>

      {/* Email Input with Verify Button */}
      <div
        className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
      >
        <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
          Email address <span className={`text-brand-tertiary-600`}>*</span>
        </label>
        <div className="flex items-center gap-8">
          <input
            type="email"
            className={`xl:min-w-[480px] xl:max-w-[512px] xl:w-[512px] w-full px-3 py-2 border-brand border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#16B364]`}
            defaultValue="clara@bizclues.com"
          />
          <button
            type="button"
            className={`px-5 py-2 button-primary-bg rounded-md`}
          >
            Verify
          </button>
        </div>
      </div>

      {/* Profile Photo Upload */}

      <div
        className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
      >
        <label
          className={`xl:min-w-[300px] text-sm font-medium text-gray-700 mb-1`}
        >
          Your photo <span className={`text-gray-400`}>(optional)</span>
        </label>
        <div className={`flex items-center space-x-4`}>
          <div
            className={`w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-400`}
          >
            O
          </div>
          <label
            className={`flex-1 cursor-pointer border-2 border-dashed border-green-500 rounded-lg p-4 text-center text-xs text-gray-500 hover:border-green-600 transition-colors`}
          >
            <div className={`flex flex-col items-center justify-center`}>
              <svg
                className={`mx-auto mb-1`}
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16v-8m0 0l-4 4m4-4l4 4"
                />
              </svg>
              Click to upload or drag and drop
              <br />
              <span className={`text-gray-400`}>
                SVG, PNG, JPG or GIF (max. 800x400px)
              </span>
            </div>
            <input type="file" className={`hidden`} />
          </label>
        </div>
      </div>

      {/* Change Password Section */}
      <hr className={`my-4 xl:my-6`} />
      <h2 className={`text-lg font-semibold text-gray-900 mb-2 xl:mb-4`}>
        Change Password
      </h2>
      <div className={`flex-1 gap-4 xl:gap-6 mb-2`}>
        <div>
          <p className={`text-xs text-gray-400 mb-2`}>
            Your new password must be different to previously used passwords.
          </p>
          <div
            className={`flex flex-col xl:flex-row xl:space-x-4 space-y-2 xl:space-y-0 mb-2`}
          >
            <input
              type="password"
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="Old Password"
              defaultValue="********"
            />
            <input
              type="password"
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="New Password"
              defaultValue="********"
            />
            <button
              type="button"
              className={`w-full bg-green-600 text-white px-6 py-2 rounded-md font-medium`}
            >
              Reset password
            </button>
          </div>
          <ul className={`mt-2 text-xs text-gray-400 space-y-1`}>
            <li className={`flex items-center`}>
              <span
                className={`w-2 h-2 rounded-full bg-green-500 inline- mr-2`}
              ></span>
              Must be at least 8 characters
            </li>
            <li className={`flex items-center`}>
              <span
                className={`w-2 h-2 rounded-full bg-green-500 inline- mr-2`}
              ></span>
              Must contain one special character
            </li>
          </ul>
        </div>
      </div>

      {/* Country, Role, Mobile and Timezone Section */}
      <hr className={`my-4 xl:my-6`} />
      <div className={`grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-6`}>
        {/* Role (read-only) */}
        <div>
          <label className={` text-sm font-medium text-gray-700 mb-1`}>
            Role
          </label>
          <input
            type="text"
            className={`w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed`}
            value="Admin"
            readOnly
          />
          <p className={`text-xs text-gray-400 mt-1`}>
            Please note the role can be changed through{" "}
            <span className={`font-semibold text-gray-700`}>
              Settings &gt; Team &gt; Edit Roles
            </span>
            ,{" "}
            <a href="#" className={`text-green-600 underline`}>
              click here
            </a>{" "}
            to change the role.
          </p>
        </div>

        {/* Country Selection */}
        <div>
          <label className={` text-sm font-medium text-gray-700 mb-1`}>
            Country *
          </label>
          <select
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile Number */}
        <div>
          <label className={` text-sm font-medium text-gray-700 mb-1`}>
            Mobile Number *
          </label>
          <div
            className={`flex flex-col xl:flex-row xl:space-x-2 space-y-2 xl:space-y-0`}
          >
            <select
              className={`px-2 py-2 border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
            >
              <option>US</option>
              <option>AU</option>
              <option>IN</option>
              <option>GB</option>
              <option>CA</option>
              <option>JP</option>
              <option>CN</option>
              <option>DE</option>
              <option>FR</option>
              <option>BR</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              className={`w-full px-3 py-2 border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="+1 (555) 000-0000"
            />
            <button
              type="button"
              className={`bg-green-600 text-white px-3 py-1 rounded-md text-xs font-medium`}
            >
              Verify
            </button>
          </div>
        </div>

        {/* Timezone Selection */}
        <div>
          <label className={` text-sm font-medium text-gray-700 mb-1`}>
            Timezone
          </label>
          <select
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            {timezones.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Bio Textarea Section */}
      <div className={`mt-4 xl:mt-6`}>
        <label className={` text-sm font-medium text-gray-700 mb-1`}>Bio</label>
        <div className={`bg-[#F8F9FB] border border-gray-300 rounded-md p-2`}>
          <div
            className={`flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2`}
          >
            <select
              className={`text-xs border border-gray-300 rounded px-1 py-0.5`}
            >
              <option>Regular</option>
              <option>Bold</option>
              <option>Italic</option>
            </select>
            <button
              type="button"
              className={`text-gray-500 hover:text-gray-700`}
            >
              <b>B</b>
            </button>
            <button
              type="button"
              className={`text-gray-500 hover:text-gray-700 italic`}
            >
              I
            </button>
            <button
              type="button"
              className={`text-gray-500 hover:text-gray-700 underline`}
            >
              U
            </button>
            <button
              type="button"
              className={`text-gray-500 hover:text-gray-700`}
            >
              •
            </button>
            <button
              type="button"
              className={`text-gray-500 hover:text-gray-700`}
            >
              1.
            </button>
          </div>
          <textarea
            className={`w-full bg-transparent border-none focus:ring-0 text-sm`}
            rows={3}
            maxLength={300}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <div className={`text-xs text-gray-400 text-right`}>
            {300 - bio.length} characters left
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
