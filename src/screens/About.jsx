import React from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"

export default function About() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#301a01]">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <section className="rounded-3xl bg-white/90 p-10 shadow-lg">
          <h1 className="text-4xl font-semibold mb-4">About  Coffee</h1>
          <p className="text-lg leading-relaxed mb-4">
           Coffee is a specialty coffee shop built around a love of flavour, community,
            and slow moments. We source beans from across the world, roast them carefully,
            and serve every cup with warmth and attention.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our menu includes single origin and signature blends, espresso drinks, filter coffee,
            and handcrafted lattes. Every coffee is roasted to bring out the best notes of the bean:
            chocolate, caramel, citrus, berry, and spice.
          </p>
          <p className="text-lg leading-relaxed">
            We believe in sustainable sourcing, ethical relationships with farmers, and creating a
            welcoming space for every guest. Whether you stop by for a quick pick-up or stay to
            enjoy the atmosphere,  Coffee is designed to be your daily coffee destination.
          </p>
        </section>

        <section className="rounded-3xl bg-white/90 p-10 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">What we do</h2>
          <ul className="space-y-3 list-disc list-inside text-lg leading-relaxed">
            <li>Freshly roasted beans from trusted growers</li>
            <li>Expertly brewed espresso and filter coffee</li>
            <li>Warm, modern shop atmosphere</li>
            <li>Easy online ordering and cart checkout</li>
            <li>Friendly service and a passion for quality</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-white/90 p-10 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Visit us</h2>
          <p className="text-lg leading-relaxed mb-4">
            Browse our shop, open a product card to see the full details, and add items directly to the cart.
            We make it simple to discover the coffee you love and place your order in one place.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3 rounded-full bg-[#301a01] text-white hover:opacity-90 transition"
          >
            Explore our coffee
          </Link>
        </section>
      </div>
    </div>
  )
}