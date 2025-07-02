const MobileField = () => {
  return (
    <div
      className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
    >
      {/* Label with required indicator */}
      <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
        Mobile Number <span className={`text-brand-tertiary-600`}>*</span>
      </label>

      {/* Mobile input and verify button container */}
      <div className={`flex items-center gap-8 pt-1 xl:pt-0`}>
        {/* Combined country code selector and phone number input */}
        <div
          className={`xl:min-w-[480px] xl:max-w-[512px] xl:w-[512px] w-full flex border-2 rounded-md border-[#16B364] focus-within:ring-2 focus-within:ring-[#16B364]`}
        >
          {/* Country code dropdown on the left */}
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

            {/* Custom dropdown arrow for the country code selector */}
            <img
              src="/assets/down.svg"
              alt="dropdown arrow"
              className="absolute left-10 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4"
            />
          </div>

          {/* The actual phone number input */}
          <input
            type="text"
            className={`w-full px-3 py-2 focus:outline-none`}
            placeholder="+1 (555) 000-0000"
            defaultValue={"+1 (555) 000-0000"}
          />
        </div>

        {/* Verification button */}
        <button
          type="button"
          className={`px-5 py-2 button-primary-bg rounded-md`}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default MobileField;
