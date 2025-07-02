import { useState, useEffect } from "react";

const timezones = [
  { value: "PST", label: "Pacific Standard Time (PST)", zone: "UTC-08:00" },
  { value: "EST", label: "Eastern Standard Time (EST)", zone: "UTC-05:00" },
  { value: "CST", label: "Central Standard Time (CST)", zone: "UTC-06:00" },
  { value: "MST", label: "Mountain Standard Time (MST)", zone: "UTC-07:00" },
  { value: "GMT", label: "Greenwich Mean Time (GMT)", zone: "UTC+00:00" },
  { value: "CET", label: "Central European Time (CET)", zone: "UTC+01:00" },
  { value: "IST", label: "Indian Standard Time (IST)", zone: "UTC+05:30" },
  {
    value: "AEST",
    label: "Australian Eastern Standard Time (AEST)",
    zone: "UTC+10:00",
  },
  { value: "JST", label: "Japan Standard Time (JST)", zone: "UTC+09:00" },
  { value: "CST_China", label: "China Standard Time (CST)", zone: "UTC+08:00" },
];

/**
 * I built this as a custom dropdown instead of using a regular select to show the timezone name and UTC offset in different colors for better readability as default selector don't support that
 */
const TimezoneField = () => {
  // Track the selected timezone, defaulting to PST
  const [timezone, setTimezone] = useState(timezones[0].value);

  // Control the help tooltip visibility
  const [timezonePopUp, setTimeZonePopUp] = useState(false);

  // Control whether the custom dropdown is open
  const [isTimezoneDropdownOpen, setIsTimezoneDropdownOpen] = useState(false);

  // the dropdown should close when clicking outside of it
  // This provides a smooth user experience
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isTimezoneDropdownOpen &&
        !event.target.closest(".timezone-dropdown")
      ) {
        setIsTimezoneDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTimezoneDropdownOpen]);

  return (
    <div
      className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
    >
      {/* Label with help tooltip */}
      <label className={`xl:min-w-[300px] text-sm text-secondary-700 relative`}>
        Timezone{" "}
        <div className="inline-block relative">
          {/* Question mark icon that shows tooltip on hover */}
          <img
            src="/assets/question.svg"
            alt="timezone info"
            className="inline-block cursor-pointer"
            onMouseEnter={() => setTimeZonePopUp(true)}
            onMouseLeave={() => setTimeZonePopUp(false)}
          />

          {/* The helpful tooltip that appears on hover */}
          {timezonePopUp && (
            <div className="absolute -left-18 -top-13 bg-[#0A0D12] h-[52px] w-[174px] text-xs text-white z-10 text-center flex items-center justify-center rounded-lg">
              Please enter your current timezone
            </div>
          )}
        </div>
      </label>

      {/* Custom timezone dropdown */}
      <div
        className={`flex gap-4 pt-1 xl:pt-0 xl:min-w-[480px] xl:max-w-[512px] xl:w-[512px] relative`}
      >
        <div className="relative w-full">
          {/* Clock icon inside the dropdown */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
            <img src="/assets/clock.svg" alt="clock" className="w-4 h-4" />
          </div>

          {/* custom dropdown implementation */}
          <div className="relative timezone-dropdown">
            {/* The main button that shows the selected timezone */}
            <button
              type="button"
              className={`xl:w-[512px] w-full pl-10 pr-10 py-2 border-primary rounded-md focus:outline-none focus:ring-1 appearance-none bg-white text-left`}
              onClick={() => setIsTimezoneDropdownOpen(!isTimezoneDropdownOpen)}
            >
              {/* timezone name in darker text */}
              <span className="text-[#181D27] font-[500]">
                {timezones.find((tz) => tz.value === timezone)?.label}
              </span>
              {/* And the UTC offset in lighter text */}
              <span className="text-[#535862] font-[400] ml-1">
                {timezones.find((tz) => tz.value === timezone)?.zone}
              </span>
            </button>

            {/* Custom dropdown arrow */}
            <img
              src="/assets/down.svg"
              alt="dropdown arrow"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4"
            />

            {/* The dropdown menu that appears when opened */}
            {isTimezoneDropdownOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-[#E9EAEB] rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                {timezones.map((tz) => (
                  <div
                    key={tz.value}
                    className="px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    onClick={() => {
                      setTimezone(tz.value);
                      setIsTimezoneDropdownOpen(false);
                    }}
                  >
                    {/* Same color scheme as the button - timezone name in darker text */}
                    <span className="text-secondary-700">{tz.label}</span>
                    {/* UTC offset in lighter text */}
                    <span className="text-tertiary-600 ml-1">{tz.zone}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimezoneField;
