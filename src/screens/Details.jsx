import React, { useEffect, useState } from "react";
import { data } from "../Data";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function Details() {
  const { Name } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const found = data.find((d) => d.Name === Name);
    setItem(found);
  }, [Name]);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f5f2] text-[#301a01]">
        <p className="text-lg mb-4">Item not found for "{Name}"</p>
        <Link
          to="/"
          className="px-6 py-2 rounded-full bg-[#301a01] text-white hover:opacity-90 transition"
        >
          Back to menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#301a01]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={item.img}
            alt={item.Name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center gap-6"
        >
          <h1 className="text-4xl font-semibold">{item.Name}</h1>

          <p className="text-xl opacity-80">
            Type: <span className="capitalize">{item.type}</span>
          </p>

          <p className="text-3xl font-bold">R {item.price}</p>

          <p className="leading-relaxed opacity-70 max-w-md">
            A rich and carefully crafted coffee made to deliver a bold flavour and smooth finish.
            Perfect for any time of day.
          </p>

          <div className="flex gap-4 mt-4">
            <button className="px-8 py-3 rounded-full bg-[#301a01] text-white hover:scale-105 transition">
              Add to cart
            </button>
            <Link
              to="/"
              className="px-8 py-3 rounded-full border border-[#301a01] hover:bg-[#301a01] hover:text-white transition"
            >
              Back
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
