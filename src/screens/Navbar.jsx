import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri'
import { Heart, Coffee } from 'lucide-react'
// import Icon from '../assets/melulaicon.png'
import { useCart } from '../contexts/CartContext'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const { cartCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="top-0 z-10 w-full bg-[var(--background)] md:bg-transparent text-[#E2B98A] px-6 py-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto p-4">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className="w-8 h-8 text-[#E2B98A]" />
          <span className="font-semibold text-xl text-[#E2B98A]">Coffee</span>
        </Link>

        <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link to="/shop" className="cursor-pointer">SHOP</Link>
          <Link to="/about" className="cursor-pointer">ABOUT</Link>
        </div>

        {/* <div className="md:hidden px-4 py-2">
          <Heart className="text-2xl" />
        </div> */}

        {/* <div className="md:hidden px-4 py-2 relative">
          <Link to="/cart" className="relative inline-flex">
            <RiShoppingCartLine className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div> */}

       

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className="text-2xl" />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="px-4 py-2 relative">
            <Link to="/cart" className="relative inline-flex">
              <RiShoppingCartLine className="text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div> 
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-[var(--background)] z-50 px-6 py-4">
          <div className="flex justify-start w-1/4">
            <button onClick={() => setMenuOpen(false)} className="text-3xl text-black">
              &times;
            </button>
          </div>

          <div className="flex flex-col mt-2 space-y-4 text-black w-3/4">
            <Link to="/shop" className="cursor-pointer text-xl">SHOP</Link>
            <Link to="/about" className="text-xl cursor-pointer">ABOUT</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar