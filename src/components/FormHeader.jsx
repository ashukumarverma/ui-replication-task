const FormHeader = () => {
  return (
    <div
      className={`flex flex-col xl:flex-row xl:items-center xl:justify-between mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
    >
      {/* Left side with the main heading and description */}
      <div>
        <h2 className={`text-lg font-medium text-[#181D27] mb-1`}>
          Personal info
        </h2>
        <p className={`text-sm text-tertiary-600`}>
          Update your photo and personal details here.
        </p>
      </div>

      {/* Right side with the Cancel and Save buttons */}
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
  );
};

export default FormHeader;
