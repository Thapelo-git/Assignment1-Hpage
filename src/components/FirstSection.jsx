import React from "react";

import Navbar from "../screens/Navbar";
import Header from "../screens/Header";

function FirstSection({text1,text2,button,bgImg}) {
  return (
    <div className="relative h-screen w-full">
      
    <div
      className="  bg-fixed bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hidden md:flex h-[5vh] w-full flex flex-row items-center block  bg-orange-300  ">
  <p className="flex-grow font-bold text-white text-center">
    Free worldwide shipping on all shoes
  </p>
  <button className="reletive w-[6vh] h-[5vh] text-white  bg-gray-300 bg-opacity-100 ml-4">
    x
  </button>
</div>

      <Navbar/>
     <div className="h-[5vh] w-full flex flex-row items-center  bg-orange-300 md:hidden ">
  <p className="flex-grow font-bold text-white text-center">
    Free worldwide shipping on all shoes
  </p>
  <button className="w-[6vh] h-[5vh] 	bg-gray-700 bg-transparent   text-white ml-4">
    x
  </button>
</div>
       <div className=" h-[300vh] w-full bg-transparent bg-opacity-50 p-6 rounded-lg w-full flex items-center justify-center flex-col h-screen text-center">
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