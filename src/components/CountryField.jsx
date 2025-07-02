import { useState } from "react";

// country list here since this component owns the country selection logic
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

/* Country selection dropdown with flag icons */
const CountryField = () => {
  // Track the currently selected country, defaulting to Australia
  const [country, setCountry] = useState(countries[0].code);

  return (
    <div
      className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
    >
      {/* Label with required indicator */}
      <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
        Country <span className={`text-brand-tertiary-600`}>*</span>
      </label>

      {/* Custom-styled dropdown with arrow icon */}
      <div
        className={`flex gap-4 pt-1 xl:pt-0 xl:min-w-[480px] xl:max-w-[512px] xl:w-[512px] relative`}
      >
        <select
          className={`w-full px-3 py-2 border-primary rounded-md focus:outline-none focus:ring-1 appearance-none bg-white pr-10`}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {/* Each option shows the flag emoji and country name */}
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.flag} {c.name}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow positioned over the select element */}
        <img
          src="/assets/down.svg"
          alt="dropdown arrow"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4"
        />
      </div>
    </div>
  );
};

export default CountryField;
