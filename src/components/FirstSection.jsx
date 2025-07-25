import React from "react";

import Navbar from "../screens/Navbar";

function FirstSection({text1,text2,button,bgImg}) {
  return (
    <div className="relative h-screen w-full">
      
    <div
      className="  bg-fixed bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Navbar/>
       <div className="bg-transparent bg-opacity-50 p-6 rounded-lg w-full flex items-center justify-center flex-col h-screen text-center">
        <h1 className="text-white text-5xl md:text-5xl font-bold  mb-4">
         {text1}
        </h1>
        <h1 className="text-white text-5xl md:text-5xl font-bold  mb-4">
           {text2}
        </h1>
         {button}
      </div>
    </div>
      
     {/* kRHLR6_FjMgp9NR */}
    
    </div>
  );
}

export default FirstSection;