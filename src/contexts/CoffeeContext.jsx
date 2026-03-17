
import React, { createContext, useState, useEffect, useContext } from 'react';

const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    async function fetchCoffee() {
      const res = await fetch('/Data.jsx');
      const data = await res.json();
      setCoffee(data.coffee);
    }
    fetchCoffee();
  }, []);

  return (
    <CoffeeContext.Provider value={{ coffee }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffee = () => useContext(CoffeeContext);
