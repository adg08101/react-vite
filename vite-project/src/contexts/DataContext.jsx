import React from "react";
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <DataContext.Provider value={{ products, setProducts }}>
      {children}
    </DataContext.Provider>
  );
};
