const NameFields = () => {
  return (
    <div
      className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
    >
      {/* Label with required indicator */}
      <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
        Name <span className={`text-brand-tertiary-600`}>*</span>
      </label>

      {/* The first and last name input fields side by side */}
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
  );
};

export default NameFields;
