import { useState } from "react";

const BioField = () => {
  const [bio, setBio] = useState(
    "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
  );

  return (
    <div
      className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
    >
      <label className={`xl:min-w-[300px] text-sm text-secondary-700`}>
        Bio
      </label>
      <div className={`xl:w-[512px] w-full pt-1 xl:pt-0`}>
        <div className={`flex flex-col gap-1`}>
          {/* Formatting toolbar with text style dropdown and action buttons */}
          <div className={`flex flex-row mb-2 items-center`}>
            {/* Text formatting dropdown */}
            <div className={`xl:w-[240px] max-xl:flex-1 relative`}>
              <select
                className={` h-[44px] w-full px-3 border-primary rounded-md focus:outline-none focus:ring-1 appearance-none`}
              >
                <option>Regular</option>
                <option>Bold</option>
                <option>Italic</option>
              </select>
              {/* Custom dropdown arrow */}
              <img
                src="/assets/down.svg"
                alt="dropdown arrow"
                className="absolute right-3 pointer-events-none top-1/2"
              />
            </div>

            {/* Rich text formatting buttons */}
            <div className={`flex items-center gap-1 ml-2`}>
              {/* Bold button */}
              <button
                type="button"
                className={`text-tertiary-600 hover:text-secondary-700`}
              >
                <img src="/assets/Bold.svg" alt="Bold" />
              </button>

              {/* Italic button */}
              <button
                type="button"
                className={`text-tertiary-600 hover:text-secondary-700`}
              >
                <img src="/assets/italic.svg" alt="Italic" />
              </button>

              {/* Link button */}
              <button
                type="button"
                className={`text-tertiary-600 hover:text-secondary-700`}
              >
                <img src="/assets/link.svg" alt="Link" />
              </button>

              {/* Bullet list button */}
              <button
                type="button"
                className={`text-tertiary-600 hover:text-secondary-700`}
              >
                <img src="/assets/ul.svg" alt="Bullet List" />
              </button>

              {/* Numbered list button */}
              <button
                type="button"
                className={`text-tertiary-600 hover:text-secondary-700`}
              >
                <img src="/assets/ol.svg" alt="Numbered List" />
              </button>
            </div>
          </div>

          {/* The main bio text area */}
          <div className={`pr-2 pb-1 pt-3 border border-[#E9EAEB] rounded-md `}>
            <textarea
              className={`w-full pl-[14px] pr-6 h-[154px] border-none focus:outline-0 text-[#181D27]`}
              rows={3}
              maxLength={400}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>

        {/* Character counter to help users stay within the limit */}
        <div className={`text-sm text-tertiary-600 pt-2`}>
          {400 - bio.length} characters left
        </div>
      </div>
    </div>
  );
};

export default BioField;
