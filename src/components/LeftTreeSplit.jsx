import React from "react";

function LeftTreeSplit({ mainImage, topRightImage, bottomRightImage }) {
  return (
    <div className="snap-center flex flex-col md:flex-row h-full w-full  ">
     
      <div className="w-full md:w-1/3 flex flex-col  ">
        <div className="h-1/2">
          <img src={topRightImage} alt="top right" className="object-cover w-full h-full" />
        </div>
        <div className="h-1/2">
          <img src={bottomRightImage} alt="bottom right" className="object-cover w-full h-full " />
        </div>
      </div>
       <div className="w-full md:w-2/3 ">
        <img src={mainImage} alt="main" className="object-cover w-full h-full rounded" />
      </div>
    </div>
  );
}

export default LeftTreeSplit;