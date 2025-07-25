import React from "react";

function DoubleImageSection({ leftImage, rightImage, alt1, alt2 }) {
  return (
    <div className="snap-center flex flex-col md:flex-row justify-center items-center  ">
      <img src={leftImage} alt={alt1} className="w-full md:w-1/2 object-cover" />
      <img src={rightImage} alt={alt2} className="w-full md:w-1/2 object-cover" />
    </div>
  );
}

export default DoubleImageSection;