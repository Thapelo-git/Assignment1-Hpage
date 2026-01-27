import React from "react";

function ThreeImageSplitSection({
  mainImage,
  leftImage,
  rightImage,
  mainText,
  leftText,
  rightText,
}) {
  return (
    <div className="snap-center relative w-full h-[500px] md:h-[600px] bg-white flex items-center justify-center">
      
      {/* SIDE IMAGES */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-16 z-0">
        
        {/* Left image */}
        <div className="flex flex-col items-center w-1/4">
          <img
            src={leftImage}
            alt="left"
            className="w-full h-[45%] md:h-[60%] object-cover rounded-sm opacity-90"
          />
          {leftText && (
            <span className="mt-2 text-xs text-gray-600 text-center">
              {leftText}
            </span>
          )}
        </div>

        {/* Right image */}
        <div className="flex flex-col items-center w-1/4">
          <img
            src={rightImage}
            alt="right"
            className="w-full h-[45%] md:h-[60%] object-cover rounded-sm opacity-90"
          />
          {rightText && (
            <span className="mt-2 text-xs text-gray-600 text-center">
              {rightText}
            </span>
          )}
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={mainImage}
          alt="main"
          className="
            w-2/3 md:w-1/3
            h-[70%] md:h-[85%]
            object-cover
            rounded-md
            shadow-sm
          "
        />
        {mainText && (
          <span className="mt-3 text-sm text-gray-700 text-center max-w-xs">
            {mainText}
          </span>
        )}
      </div>

    </div>
  );
}

export default ThreeImageSplitSection;
