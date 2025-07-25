import React, { useState }  from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import Icon from "../assets/melulaicon.png"
import Close from "../assets/close.png"
 import {FaBars} from "react-icons/fa"
 import {RiShoppingCartLine} from "react-icons/ri"
import Cart from "../assets/cart-icon.jpg"
import { Link } from 'react-router-dom'
const Navbar = () => {

 const [menuOpen,setMenuOpen] = useState(false)
  
  return (
 
    <nav className=" relative z-10 w-full bg-blue-900 md:bg-transparent text-white px-6 py-4 ">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto p-4">
        
       <Link to="/">
        <img src={Icon} className='w-25 h-10 lg:w-20'/>
        </Link>

        <div className="hidden md:flex  gap-8 absolute left-1/2 transform -translate-x-1/2">
        
      <Link to="/shop" className="curser-pointer">SHOP</Link>
      <Link to="/about" className="curser-pointer">ABOUT</Link>
    </div>
        <div className="md:hidden px-4 py-2 ">
          <RiShoppingCartLine className="text-white text-2xl"/>
        </div>
         <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className="text-white text-2xl" />
          </button>
        </div>
      
        <div className="hidden md:flex ">
          <div className="  px-4 py-2 ">
          <RiShoppingCartLine className="text-white text-2xl"/>
        </div>
        </div>
      </div>
       {menuOpen && (
  <div className="md:hidden absolute top-0 left-0 w-full  h-screen bg-white z-50 px-6 py-4">
    
    <div className="flex justify-start w-1/4 ">
      <button onClick={() => setMenuOpen(false)} className="text-3xl  text-black">
        &times; 
      </button>
    </div>

   
    <div className="flex flex-col mt-2 space-y-4 text-black w-3/4">
    <Link to="/shop" className='cursor-pointer text-xl'>SHOP</Link>
     
      <Link to="/about" className=" text-xl cursor-pointer">ABOUT</Link>
    
    </div>
  </div>
)}

      
    </nav>
  );
}



export default Navbar

