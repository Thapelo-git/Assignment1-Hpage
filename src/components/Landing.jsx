import React from "react";
import FirstSection from "./FirstSection";
import DoubleImageSection from "./DoubleImageSection";
import ThreeImageSplitSection from "./ThreeImageSplitSection";
import shoe1 from "../assets/shoe1.jpg";
import dock from "../assets/dock.jpg";
import pershoes from "../assets/pershoes.jpg";
import reflectedshoe from "../assets/reflectedshoe.jpg";
import sticks from "../assets/sticks.jpg";
import skyblueshoes from "../assets/skyblueshoe.jpg";
import kidsticks from "../assets/kidsticks.jpg";
import skybluepershoes from "../assets/skybluepershoes.jpg";
import kiddock from "../assets/kiddock.jpg";
import purbleshoes from "../assets/purbleshoes.jpg";
import melulagif from "../assets/melulagif.gif";
import wordspic from "../assets/wordspic.png";
import manylaces from "../assets/manyLaces.jpg";
import laces from "../assets/laces.jpg";
import LeftTreeSplit from "./LeftTreeSplit";
import coverpic from "../assets/coverimage.jpg";
function Landing() {
  return (
    <div className=" snap-y   w-full  h-full">
      
      <FirstSection  text1="FOR COLOURFUL " text2="STEPS IN LIFE"  bgImg={coverpic} button={<button className="bg-teal-400 h-15 hover:bg-teal-300  text-center text-l  text-white rounded-4xl w-60">VISIT OUR SHOP</button>} />
      <DoubleImageSection leftImage={shoe1} rightImage={dock} alt1="shoe1" alt2="dock" />
         <div className="snap-center flex flex-col mr-0 p-4 text-white  gap-4 bg-blue-900 h-88 w-full">
        <span className="font-large mr-auto w-max text-lg">Melula Kids shoes</span>
        <p className="max-w-2xl text-3xl mr-auto ">
          Melula is a Copenhagen-based kids fashion brand.
          Colourful, playful, and gender-neutral.
          Designed in Denmark, produced in Portugal.
        </p>
        <div className=" flex flex-row gap-3">
            <span className="text-white">|</span>
            <span className="text-teal-400">Read our story</span>
            </div>
      </div>
      <ThreeImageSplitSection
        mainImage={pershoes}
        topRightImage={reflectedshoe}
        bottomRightImage={sticks}
      />
      <LeftTreeSplit
        mainImage={skyblueshoes}
        topRightImage={kidsticks}
        bottomRightImage={skybluepershoes}
      />
      <ThreeImageSplitSection
        mainImage={kiddock}
        topRightImage={purbleshoes}
        bottomRightImage={melulagif}
      />
      <div className="text-center px-0">
     
          <div className="snap-center flex flex-col items-center justify-center bg-white p-4">
        <span className="text-blue-900 text-2xl mb-2">They talk about us</span>
        <img src={wordspic} alt="wordspic" className="w-full h-30" />
        <hr className="border border-gray-400 my-4 w-full" />

      </div>

     
      <div className="snap-center flex flex-col lg:flex-row  s items-center gap-6 justify-around bg-white p-6">
        
        <div className="flex flex-col gap-4 ">
          <span className="text-blue-900 text-xl md:w-48">Follow us on Instagram</span>
          <span className="text-blue-900 text-xl md:w-48">@melula_copenhagen</span>
          <div className="flex flex-row gap-2 ">
          <img src={manylaces} alt="manylaces" className="w-1/2 md:w-42" />
          <img src={laces} alt="laces" className="w-1/2 md:w-42" />
          </div>
          </div>
          <div className="flex flex-col mb-4 lg:w-1/4 md:mb-0 text-center lg:h-full  gap-4">
          <span className="text-3xl">Subscribe</span>
          <span>Sign up with your email address to receive news and updates.</span>
          <div className="flex flex-row gap-2">
            <input className="p-2  border border-gray-400 w-3/4"
            placeholder="Email Address" />
            <button className="bg-teal-400 h-10  text-center text-white rounded-sm w-2/4">SIGN UP</button>
          </div>
          <span className="text-xs text-gray-500">We respect your privacy.</span>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Landing;