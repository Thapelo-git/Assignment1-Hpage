import React from "react";

import Navbar from "../screens/Navbar";
import Header from "../screens/Header";
import { Link } from "react-router-dom";
function FirstSection({text1,text2,bgImg}) {
  return (
    <div className="relative">
   <div
  className="relative min-h-screen bg-fixed bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center min-h-screen w-full"
  style={{
    backgroundImage: `url(${bgImg})`,
  }}
>

      <Navbar/>
       <div className=" h-[10vh] w-full bg-transparent bg-opacity-50 p-6 rounded-lg w-full flex items-center justify-center flex-col h-screen text-center">
        <h1 className="text-white text-5xl md:text-5xl font-bold  mb-4">
         {text1}
        </h1>
        <h1 className="text-white text-5xl md:text-5xl font-bold  mb-4">
           {text2}
        </h1>
         <Link to="/shop" className="bg-[image:var(--linearPrimarySecondary)] h-15 hover:bg-teal-300 flex items-center justify-center text-center text-l text-white rounded-4xl w-60">
           VISIT OUR SHOP
         </Link>
      </div>
    </div>
      
 
    
    </div>
  );
}

export default FirstSection;