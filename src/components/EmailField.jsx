const EmailField = () => {
  return (
    <div
      className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
    >
      {/* Label with required indicator */}
      <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
        Email address <span className={`text-brand-tertiary-600`}>*</span>
      </label>

      {/* Email input with icon and verify button */}
      <div className="flex items-center gap-8">
        <div className="relative xl:min-w-[480px] xl:max-w-[512px] xl:w-[512px] w-full">
          {/* Mail icon positioned inside the input field */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
            <img src={`/assets/mail.svg`} alt="mail" />
          </div>

          {/* Email input with left padding for the icon */}
          <input
            type="email"
            className={`w-full pl-10 pr-3 py-2 border-brand border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#16B364]`}
            defaultValue="clara@bizclues.com"
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

export default EmailField;
