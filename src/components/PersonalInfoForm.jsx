import { useState, useRef } from "react";

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

  // State to track if user is currently dragging a file over the upload area
  const [isDragOver, setIsDragOver] = useState(false);
  // Reference to the hidden file input element for programmatic clicks
  const fileInputRef = useRef(null);

  // Function to trigger the hidden file input when user clicks the upload area
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file selection when user chooses a file through the file dialog
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      // we can handle the file upload here
    }
  };

  // Handle when user drops a file onto the upload area
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false); // Reset the drag state since drop is complete

    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log("Dropped file:", file);
    }
  };

  // Handle when user drags a file over the upload area (required for drop to work)
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy"; // Show copy cursor icon
  };

  // Handle when user first drags a file into the upload area
  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Drag enter detected");
    setIsDragOver(true); // Show visual feedback that file can be dropped here
  };

  // Handle when user drags a file out of the upload area
  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Drag leave detected");
    // Only hide the drag feedback if we're actually leaving the drop zone entirely
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsDragOver(false);
    }
  };

  const [password, setPassword] = useState("********");
  const [newPassword, setNewPassword] = useState("********");
  const [timezonePopUp, setTimeZonePopUp] = useState(false);

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
        <div className={`xl:min-w-[300px] flex flex-col max-md:mb-1 `}>
          <label className={`text-sm text-secondary-700`}>
            Your photo <span className={`text-brand-tertiary-600`}>*</span>{" "}
            <img
              src="/assets/question.svg"
              alt="photo!"
              className="inline-block"
            />
          </label>
          <p className={`text-sm text-tertiary-600`}>
            This will be displayed on your profile.
          </p>
        </div>
        <div className={`flex gap-5`}>
          <div
            className={`w-16 h-16 rounded-full border-2 border-black/8`}
          ></div>
          <div
            className={`w-[428px] h-[126px] cursor-pointer border-2 rounded-md p-4 text-center text-xs ${
              isDragOver
                ? "bg-[#FAFAFA] ring-1 ring-[#16B364] border-brand"
                : "border-secondary "
            }`}
            onClick={handleClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
            {/* Hidden File Input */}
            <input
              type="file"
              accept=".svg,.png,.jpg,.jpeg,.gif"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />

            {/* UI */}
            <div className="flex flex-col gap-3 items-center">
              <div className="h-10 w-10 rounded-md border border-[#E9EAEB] bg-white flex items-center justify-center shadow-xs">
                <img src="/assets/upload.svg" alt="Upload Icon" />
              </div>
              <div className="text-sm text-tertiary-600">
                <span className="font-medium button-tertiary-color-fg">
                  Click to upload
                </span>{" "}
                or drag and drop
                <br />
                <span>SVG, PNG, JPG or GIF (max. 800x400px)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div
        className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
      >
        <div className={`xl:min-w-[300px] flex flex-col max-md:mb-1 `}>
          <label className={`text-sm text-secondary-700 mb-1`}>
            Change Password
          </label>
          <p className={`text-sm text-tertiary-600 xl:w-[210px]`}>
            Your new password must be different to previously used passwords.
          </p>
        </div>
        <div className={`flex flex-col gap-5 flex-1 max-md:mx-auto`}>
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
          <button
            type="button"
            className={`px-5 py-2 w-[360px]  button-primary-bg rounded-md self-start`}
          >
            Reset password
          </button>
        </div>
      </div>

      {/* Role Section */}
      <div
        className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
      >
        <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
          Role
        </label>
        <div className={`flex flex-col pt-1 xl:pt-0`}>
          <input
            type="text"
            className={`xl:w-[512px] w-full px-3 py-2 border-primary rounded-md text-tertiary-600 cursor-not-allowed bg-disabled`}
            value="Admin"
            readOnly
          />
          <p className={`text-sm text-tertiary-600 mt-1 xl:w-[512px]`}>
            Please note the role can be changed through{" "}
            <span className={`font-semibold`}>
              Settings &gt; Team &gt; Edit Roles
            </span>
            ,{" "}
            <a href="#" className={`underline font-semibold`}>
              click here
            </a>{" "}
            to change the role.
          </p>
        </div>
      </div>
      {/* Country and Mobile Number Section */}
      <div
        className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
      >
        <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
          Country <span className={`text-brand-tertiary-600`}>*</span>
        </label>
        <div
          className={`flex gap-4 pt-1 xl:pt-0 xl:min-w-[480px] xl:max-w-[512px] xl:w-[512px] relative`}
        >
          <select
            className={`w-full px-3 py-2 border-primary rounded-md focus:outline-none focus:ring-1 appearance-none bg-white pr-10`}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>
          <img
            src="/assets/down.svg"
            alt="dropdown arrow"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4"
          />
        </div>
      </div>

      {/* Mobile Number Section */}
      <div
        className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
      >
        <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
          Mobile Number <span className={`text-brand-tertiary-600`}>*</span>
        </label>
        <div className={`flex items-center gap-8 pt-1 xl:pt-0`}>
          <div
            className={`xl:min-w-[480px] xl:max-w-[512px] xl:w-[512px] w-full flex border-2 rounded-md border-[#16B364] focus-within:ring-2 focus-within:ring-[#16B364]`}
          >
            <div className={`relative w-[62px]`}>
              <select
                className={`px-2 py-2 rounded-md appearance-none focus:outline-none bg-white pr-4`}
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
              <img
                src="/assets/down.svg"
                alt="dropdown arrow"
                className="absolute left-10 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4"
              />
            </div>
            <input
              type="text"
              className={`w-full px-3 py-2 focus:outline-none`}
              placeholder="+1 (555) 000-0000"
              defaultValue={"+1 (555) 000-0000"}
            />
          </div>
          <button
            type="button"
            className={`px-5 py-2 button-primary-bg rounded-md`}
          >
            Verify
          </button>
        </div>
      </div>

      {/* Timezone Selection */}
      <div
        className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
      >
        <label
          className={`xl:min-w-[300px] text-sm text-secondary-700 relative`}
        >
          Timezone{" "}
          <div className="inline-block relative">
            <img
              src="/assets/question.svg"
              alt="timezone info"
              className="inline-block cursor-pointer"
              onMouseEnter={() => setTimeZonePopUp(true)}
              onMouseLeave={() => setTimeZonePopUp(false)}
            />
            {timezonePopUp && (
              <div className="absolute -left-18 -top-13 bg-[#0A0D12] h-[52px] w-[174px] text-xs text-white z-10 text-center flex items-center justify-center rounded-lg">
                Please enter your current timezone
              </div>
            )}
          </div>
        </label>
        <div
          className={`flex gap-4 pt-1 xl:pt-0 xl:min-w-[480px] xl:max-w-[512px] xl:w-[512px] relative`}
        >
          <select
            className={`xl:w-[512px] w-full px-3 py-2 border-primary rounded-md focus:outline-none focus:ring-1 appearance-none`}
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            {timezones.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
          <img
            src="/assets/down.svg"
            alt="dropdown arrow"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4"
          />
        </div>
      </div>

      {/* Bio Section */}
      <div
        className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
      >
        <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
          Bio
        </label>
        <div className={`xl:w-[512px] w-full pt-1 xl:pt-0`}>
          <div className={`flex flex-col gap-1`}>
            <div className={`flex flex-row mb-2 items-center`}>
              <div className={`xl:w-[240px] max-xl:flex-1 relative`}>
                <select
                  className={` h-[44px] w-full px-3 border-primary rounded-md focus:outline-none focus:ring-1 appearance-none`}
                >
                  <option>Regular</option>
                  <option>Bold</option>
                  <option>Italic</option>
                </select>
                <img
                  src="/assets/down.svg"
                  alt="dropdown arrow"
                  className="absolute right-3 pointer-events-none top-1/2"
                />
              </div>

              <div className={`flex items-center gap-1 ml-2`}>
                <button
                  type="button"
                  className={`text-tertiary-600 hover:text-secondary-700`}
                >
                  <img src="/assets/Bold.svg" alt="Bold" />
                </button>
                <button
                  type="button"
                  className={`text-tertiary-600 hover:text-secondary-700`}
                >
                  <img src="/assets/italic.svg" alt="Italic" />
                </button>
                <button
                  type="button"
                  className={`text-tertiary-600 hover:text-secondary-700`}
                >
                  <img src="/assets/link.svg" alt="Link" />
                </button>
                <button
                  type="button"
                  className={`text-tertiary-600 hover:text-secondary-700`}
                >
                  <img src="/assets/ul.svg" alt="Bullet List" />
                </button>
                <button
                  type="button"
                  className={`text-tertiary-600 hover:text-secondary-700`}
                >
                  <img src="/assets/ol.svg" alt="Numbered List" />
                </button>
              </div>
            </div>
            <div
              className={`pr-2 pb-1 pt-3 border border-[#E9EAEB] rounded-md `}
            >
              <textarea
                className={`w-full pl-[14px] pr-6 h-[154px] border-none focus:outline-0 text-[#181D27]`}
                rows={3}
                maxLength={400}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>
          <div className={`text-sm text-tertiary-600 pt-2`}>
            {400 - bio.length} characters left
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
