import React from 'react';
import coverpic from "../assets/coverimage.jpg";
import shoe1 from "../assets/shoe1.jpg";
import dock from "../assets/dock.jpg";
import pershoes from "../assets/pershoes.jpg";
import reflectedshoe from "../assets/reflectedshoe.jpg";
import sticks from "../assets/sticks.jpg";
import skyblueshoes from "../assets/skyblueshoe.jpg";
import melulagif from "../assets/melulagif.gif";
import kidsticks from "../assets/kidsticks.jpg";
import skybluepershoes from "../assets/skybluepershoes.jpg";
import kiddock from "../assets/kiddock.jpg";
import purbleshoes from "../assets/purbleshoes.jpg";
import wordspic from "../assets/wordspic.png";
import manylaces from "../assets/manylaces.jpeg";
import laces from "../assets/laces.jpeg";

function Landing() {
  return (
    <div className="snap-y  w-full  h-full">
    
     
      <div
  className="snap-center h-full w-full bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${coverpic})` }}
>
  <div className="bg-transparent bg-opacity-50 p-6 rounded-lg text-center">
    <h1 className="text-white text-5xl md:text-5xl font-bold mb-4">FOR COLOURFUL
STEPS IN LIFE</h1>
    {/* <p className="text-white text-lg md:text-xl max-w-xl">
      Colourful, playful, and gender-neutral. Designed in Denmark, produced in Portugal.
    </p> */}
  </div>
</div>

<div className="snap-center flex flex-col lg:flex-row justify-center items-center gap-4 px-4">
  <img src={shoe1} alt="shoe1" className="w-full lg:w-1/2 object-cover" />
  <img src={dock} alt="dock" className="w-full lg:w-1/2 object-cover" />
</div>
<div className="snap-center flex flex-col lg:flex-row h-full w-full p-4 gap-4">

  <div className="w-full lg:w-2/3 h-1/2 lg:h-full">
    <img
      src={pershoes}
      alt="pershoes"
      className="object-cover w-full h-full rounded"
    />
  </div>


  <div className="w-full lg:w-1/3 flex flex-col gap-4 h-1/2 lg:h-full">
    <div className="h-1/2">
      <img
        src={reflectedshoe}
        alt="reflectedshoe"
        className="object-cover w-full h-full rounded"
      />
    </div>
    <div className="h-1/2">
      <img
        src={sticks}
        alt="sticks"
        className="object-cover w-full h-full rounded"
      />
    </div>
  </div>
</div>
<div className="snap-center flex flex-col lg:flex-row h-screen w-full p-4 gap-4">
      <div className="w-full lg:w-1/3 flex flex-col gap-4 h-1/2 lg:h-full">
    <div className="h-1/2">
      <img
        src={kidsticks}
        alt="kidsticks"
        className="object-cover w-full h-full rounded"
      />
    </div>
    <div className="h-1/2">
      <img
        src={skybluepershoes}
        alt="skybluepershoes"
        className="object-cover w-full h-full rounded"
      />
    </div>
  </div>
  <div className="w-full lg:w-2/3 h-1/2 lg:h-full">
    <img
      src={skyblueshoes}
      alt="pershoes"
      className="object-cover w-full h-full rounded"
    />
  </div>


  
</div>
<div className="snap-center flex flex-col lg:flex-row h-screen w-full p-4 gap-4">

  <div className="w-full lg:w-2/3 h-1/2 lg:h-full">
    <img
      src={kiddock}
      alt="kiddock"
      className="object-cover w-full h-full rounded"
    />
  </div>


  <div className="w-full lg:w-1/3 flex flex-col gap-4 h-1/2 lg:h-full">
    <div className="h-1/2">
      <img
        src={purbleshoes}
        alt="reflectedshoe"
        className="object-cover w-full h-full rounded"
      />
    </div>
    <div className="h-1/2">
      <img
        src={melulagif}
        alt="melulagif"
        className="object-cover w-full h-full rounded"
      />
    </div>
  </div>
</div>
      
      <div className="snap-center flex flex-col items-center justify-center p-4 text-center bg-blue-900 h-full w-full">
        <span className="font-medium text-blue-800 text-lg md:text-xl">Melula Kids shoes</span>
        <p className="max-w-2xl text-gray-700 mt-2">
          Melula is a Copenhagen-based kids fashion brand.
          Colourful, playful, and gender-neutral.
          Designed in Denmark, produced in Portugal.
        </p>
      </div>

      
      <div className="snap-center flex flex-col items-center justify-center bg-white p-4">
        <span className="text-blue-900 text-2xl mb-2">They talk about us</span>
        <img src={wordspic} alt="wordspic" className="w-3/4 md:w-1/2" />
      </div>

     
      <div className="snap-center flex flex-col md:flex-row lg:flex-row items-center justify-around bg-white p-6">
        <div className="flex flex-col mb-4 md:mb-0 text-center lg:h-full lg:w-full ">
          <span>Subscribe</span>
          <span>Sign up with your email address to receive news and updates.</span>
        </div>
        <div className="flex gap-4">
          <span className="text-blue-900 text-2xl md:w-48">Follow us on Instagram</span>
          <span className="text-blue-900 text-xl md:w-48">@melula_copenhagen</span>
          <img src={manylaces} alt="manylaces" className="w-32 md:w-48" />
          <img src={laces} alt="laces" className="w-32 md:w-48" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
