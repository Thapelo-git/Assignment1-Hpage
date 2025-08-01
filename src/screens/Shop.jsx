import React from 'react';
import FirstSection from '../components/FirstSection';
import coverpic from "../assets/coverimage.jpg";
import ShopImages from '../components/ShopImages';
import {data} from "../Data"

import { Link } from 'react-router-dom';
const Shop = () => {
   
    return (
        <div className='snap-y  '>
            <section className='snap-start h-screen relative'>
            <FirstSection text1="SHOP" bgImg={coverpic} button={<Link to="/about"
             className="bg-teal-400 h-15 hover:bg-teal-300 flex justify-center items-center  text-center text-l 
              text-white rounded-4xl w-60">ABOUT</Link>}/>
            </section>
            <section className='snap-center bg-white min-h-screen p-6 z-10 relative'>
            <div className='snap-center flex justify-center items-center p-4'>
          <div className='flex items-center gap-6 justify-center'>
            <button className='text-xl'>Alle</button>
            <button className='text-xl'>Kids shoes</button>
            <button className='text-xl'>No-tie Laces</button>
          </div>
          </div>
          <div className='snap-center flex flex-wrap flex-row justify-center items-center gap-2 p-4'>
          {
            data.map((items)=>(
                
                    <div className='w-48 md:w-68 lg:w-128  lg:h-128 md:h-68 gap-2 flex flex-col justify-center items-center'>
                    <img src={items.img} className='w-48 md:w-58 lg:w-80 lg:h-80 md:h-55'/>
                    <p>{items.Name}</p>
                    <p>{items.price}</p>
                    </div>
                
            ))
          }
          </div>
          <div></div>
         {/* TTI Bursary management */}
          </section>
        </div>
    );
};

export default Shop;