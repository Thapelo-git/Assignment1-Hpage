import React from 'react';
import FirstSection from '../components/FirstSection';
import coverpic from "../assets/coverimage.jpg";
import ShopImages from '../components/ShopImages';
import coral1 from "../assets/shop/coral1.jpg"
 import blue from "../assets/shop/blue.jpg"
 import yellow from "../assets/shop/yellow.jpg"
 import white from "../assets/shop/white.jpg"
import turq from "../assets/shop/turq.jpg"
import royall from "../assets/shop/royall.jpg"
import { Link } from 'react-router-dom';
const Shop = () => {
    const  images =[
        {img:coral1,Name:"Coral No-Tie Laces",price:"10,00 " },{img:turq ,Name:"Coral No-Tie Laces",price:"10,00 " },{img:royall,Name:"Royal Blue No-Tie Laces",price:"10,00 " },
        {img:yellow,Name:"Coral No-Tie Laces",price:"10,00 " },{img:white ,Name:"Coral No-Tie Laces",price:"10,00 " },{img:blue,Name:"Royal Blue No-Tie Laces",price:"10,00 " }]
    
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
            images.map((items)=>(
                
                    <div className='w-48 md:w-88 lg:w-108 lg:h-108 md:h-88 gap-2 '>
                    <img src={items.img}/>
                    <p>{items.Name}</p>
                    <p>{items.price}</p>
                    </div>
                
            ))
          }
          </div>
          <div></div>
          
          </section>
        </div>
    );
};

export default Shop;