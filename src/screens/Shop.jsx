import React, { useEffect, useState } from 'react';
import FirstSection from '../components/FirstSection';
import coverpic from "../assets/coverimage.jpg";
import ShopImages from '../components/ShopImages';
import {data} from "../Data"

import { Link } from 'react-router-dom';
const Shop = () => {
   const [filter,setFilter]=useState("all")
   const [visible,setVisible]=useState(data)
   useEffect(()=>{
    if (filter === 'shoe') {
      setVisible(data.filter(i =>
        i.type.toLowerCase().includes('shoe')
      ));
    } else if (filter === 'lace') {
      setVisible(data.filter(i =>
        i.type.toLowerCase().includes('lace')
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
            <section className='snap-center bg-white min-h-screen p-6 z-10 relative'>
            <div className='snap-center flex justify-center items-center p-4'>
          <div className='flex items-center gap-6 justify-center'>
            <Link className='text-xl curser-pointer hover:text-gray-400' onClick={()=>setFilter("all")}>All</Link>
            <Link className='text-xl curser-pointer hover:text-gray-400' onClick={()=>setFilter("shoe")} >Kids shoes</Link>
            <Link className='text-xl curser-pointer hover:text-gray-400' onClick={()=>setFilter("lace")}>No-tie Laces</Link>
          </div>
          </div>
          <div className='snap-center flex flex-wrap flex-row justify-center items-center gap-2 p-4'>
          {
            visible.map((items)=>(
                
                    <Link to={`/details/${items.Name}`} key={items.id} className='w-48 md:w-60 lg:w-110  lg:h-110 md:h-60  flex flex-col justify-center items-center'>
                    <img src={items.img} className='w-48 md:w-58 lg:w-80 lg:h-65 md:h-55'/>
                    <p>{items.Name}</p>
                    <p className='text-gray-400 text-xs'>{items.price}</p>
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