import React from "react";

function LeftTreeSplit({ mainImage, topRightImage, bottomRightImage }) {
  return (
    <div className="snap-center w-full bg-white py-12 flex items-center justify-center">
      
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center gap-8">
        
        {/* LEFT SMALL IMAGES */}
        <div className="flex flex-row md:flex-col gap-6 md:w-1/3 justify-center">
          
          <img
            src={topRightImage}
            alt="top"
            className="
              w-40 md:w-full
              h-52
              object-cover
              rounded-sm
              opacity-95
            "
          />

          <img
            src={bottomRightImage}
            alt="bottom"
            className="
              w-40 md:w-full
              h-52
              object-cover
              rounded-sm
              opacity-95
            "
          />
        </div>

        {/* MAIN IMAGE */}
        <div className="md:w-2/3 flex justify-center">
          <img
            src={mainImage}
            alt="main"
            className="
              w-3/4 md:w-2/3
              h-80 md:h-[420px]
              object-cover 
              rounded-md
              shadow-sm
            "
          />
        </div>

      </div>
    </div>
  );
}

export default LeftTreeSplit;
