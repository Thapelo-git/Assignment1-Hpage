import React from "react";

function DoubleImageSection({ leftImage, rightImage, alt1, alt2 }) {
  return (
    <div className="snap-center w-full bg-white py-12 flex items-center justify-center">
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        
        {/* Left image */}
        <img
          src={leftImage}
          alt={alt1}
          className="
            w-3/4 md:w-64
            h-56 md:h-64
            object-cover
            rounded-sm
            opacity-95
          "
        />

        {/* Right image */}
        <img
          src={rightImage}
          alt={alt2}
          className="
            w-3/4 md:w-64
            h-56 md:h-64
            object-cover
            rounded-sm
            opacity-95
          "
        />

      </div>
    </div>
  );
}

export default DoubleImageSection;
