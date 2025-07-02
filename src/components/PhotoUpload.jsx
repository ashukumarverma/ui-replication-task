import { useState, useRef } from "react";

/**
 * Profile photo upload component with drag & drop functionality
 * file uploading as user-friendly as possible, so users can either:
 * 1. Click to open the file picker, or 2. Drag and drop files directly
 * The visual feedback shows when a file is being dragged over the drop zone
 */
const PhotoUpload = () => {
  // track whether the user is currently dragging a file over our upload area
  // This lets me show visual feedback to indicate they can drop the file here
  const [isDragOver, setIsDragOver] = useState(false);

  // Reference to the hidden file input so it can be triggered with a click
  const fileInputRef = useRef(null);

  // When the user clicks the upload area, trigger the hidden file input
  // This gives them the standard file picker dialog
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle when the user selects a file through the file dialog
  // Right now log it, but this will be used to uploading to the server
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      // here to handle the actual file upload
    }
  };

  // When the user drops a file, process it and reset the drag state
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false); // No longer dragging, so hide the visual feedback

    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log("Dropped file:", file);
      // real upload logic
    }
  };

  // This is required for the drop functionality to work properly
  // prevent the default behavior and show a copy cursor
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy"; // Shows the copy cursor icon
  };

  // When a file first enters the drop zone, show visual feedback
  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Drag enter detected");
    setIsDragOver(true); // This triggers the visual feedback styling
  };

  // When the file leaves the drop zone, hide the visual feedback
  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Drag leave detected");
    // Only hide feedback if we're actually leaving the entire drop zone
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsDragOver(false);
    }
  };

  return (
    <div
      className={`flex flex-col xl:flex-row mb-4 xl:mb-6 border-b border-[#E9EAEB] pb-4 xl:pb-6`}
    >
      {/* Left side with label and description */}
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

      {/* Right side with current photo and upload area */}
      <div className={`flex gap-5`}>
        {/* Current profile photo placeholder - would show actual photo if uploaded */}
        <div className={`w-16 h-16 rounded-full border-2 border-black/8`}></div>

        {/* The main drag & drop upload area */}
        <div
          className={`w-[428px] h-[126px] cursor-pointer border-2 rounded-md p-4 text-center text-xs ${
            isDragOver
              ? "bg-[#FAFAFA] ring-1 ring-[#16B364] border-brand" // Visual feedback when dragging
              : "border-secondary " // Normal state styling
          }`}
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
          {/* Hidden file input that gets triggered when clicking the upload area */}
          <input
            type="file"
            accept=".svg,.png,.jpg,.jpeg,.gif"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />

          {/* The visual upload interface users see */}
          <div className="flex flex-col gap-3 items-center">
            {/* Upload icon in a nice bordered container */}
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
  );
};

export default PhotoUpload;
