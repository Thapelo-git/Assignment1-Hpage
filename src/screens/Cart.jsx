import React from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { useCart } from "../contexts/CartContext"

export default function Cart() {
  const { cartItems } = useCart()

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#301a01]">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-semibold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <p className="text-lg mb-4">Your cart is empty.</p>
            <Link
              to="/shop"
              className="inline-block px-6 py-3 rounded-full bg-[#301a01] text-white"
            >
              Browse coffee
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={`${item.Name}-${index}`}
                className="rounded-3xl bg-white p-6 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h2 className="text-2xl font-semibold">{item.Name}</h2>
                  <p className="text-sm text-[#7a5d45] capitalize mb-2">{item.type}</p>
                  <p className="text-lg font-bold">R {item.price}</p>
                  {item.description && (
                    <p className="mt-2 text-sm opacity-80">{item.description}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-70">Quantity: 1</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}