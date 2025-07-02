const RoleField = () => {
  return (
    <div
      className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
    >
      <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
        Role
      </label>

      <div className={`flex flex-col pt-1 xl:pt-0`}>
        {/* Read-only input with disabled styling */}
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
  );
};

export default RoleField;
