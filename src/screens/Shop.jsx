import React, { useEffect, useState } from 'react';
import FirstSection from '../components/FirstSection';
import coverpic from "../assets/coffee/milkcoffee2.jpg";
import ShopImages from '../components/ShopImages';
import {data} from "../Data"

import { Link } from 'react-router-dom';
const Shop = () => {
   const [filter,setFilter]=useState("all")
   const [visible,setVisible]=useState(data)
   useEffect(()=>{
    if (filter === 'coffee') {
      setVisible(data.filter(i =>
        i.type.toLowerCase().includes('coffee')
      ));
    } else if (filter === 'nespresso') {
      setVisible(data.filter(i =>
        i.type.toLowerCase().includes('nespresso')
      ));
    }   else if (filter === 'icelatte') {
      setVisible(data.filter(i =>
        i.type.toLowerCase().includes('icelatte')
      ));
       }   else if (filter === 'blend') {
      setVisible(data.filter(i =>
        i.type.toLowerCase().includes('blend')
      ));
    } else {
      setVisible(data);      
    }
   },[filter])
    return (
        <div className='snap-y  '>
            <section className='snap-start h-screen relative'>
            <FirstSection text1="SHOP" bgImg={coverpic} button={<Link to="/about"
             className="bg-teal-400 h-15 hover:bg-teal-300 flex justify-center items-center  text-center text-l 
              text-white rounded-4xl w-60">ABOUT</Link>}/>
            </section>
            <section className='snap-center  min-h-screen p-6 z-10 relative'>
            <div className='snap-center flex justify-center items-center p-4'>
          <div className='flex items-center gap-6 justify-center'>
            <Link className='text-xl curser-pointer hover:text-gray-400' onClick={()=>setFilter("all")}>All</Link>
            <Link className='text-xl curser-pointer hover:text-gray-400' onClick={()=>setFilter("coffee")} >Coffee </Link>
            <Link className='text-xl curser-pointer hover:text-gray-400' onClick={()=>setFilter("nespresso")}>Nespresso</Link>
             <Link className='text-xl curser-pointer hover:text-gray-400' onClick={()=>setFilter("icelatte")}>Ice Latte</Link>
                <Link className='text-xl curser-pointer hover:text-gray-400' onClick={()=>setFilter("blend")}>Blend</Link>
          </div>
          </div>
          <div className='snap-center flex flex-wrap flex-row justify-center items-center gap-2 p-4'>
          {
            visible.map((items)=>(
                
               <Link
  to={`/details/${items.Name}`}
  key={items.id}
  className="relative w-56 md:w-64 h-80  overflow-hidden shadow-lg gap-4 group"
>

  <img
    src={items.img}
    alt={items.Name}
    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
  />

  
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

 
  <div className="absolute bottom-0 left-0 right-0 bg-[#06402B] text-white px-4 py-4">
    <p className="text-sm opacity-80 mb-1">
      {items.type}
    </p>

    <h3 className="font-semibold text-lg leading-tight">
      {items.Name}
    </h3>

    <div className="flex items-center justify-between mt-3">
      <p className="text-sm font-medium">
        R {items.price}
      </p>

      <div className="w-9 h-9 bg-[#1e3d30] rounded-full flex items-center justify-center">
        🛒
      </div>
    </div>
  </div>
</Link>


                
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