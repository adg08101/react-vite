import React from "react";
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [productsChart, setProductsChart] = useState([]);

  const [productsBackup, setProductsBackup] = useState(products);

  const buyAction = (item) => {
    alert(`Buying ${item.name} for $${item.price}`);

    const buyChart = [...productsChart, item];
    setProductsChart(buyChart);
  };

  const removeAction = (item) => {
    alert(`Removing ${item.name} for $${item.price}`);

    const buyChart = productsChart.filter((i) => i.name != item.name);
    console.log(buyChart);

    setProductsChart(buyChart);
  };

  useEffect(() => {
    fetch("./data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <DataContext.Provider
      value={{
        products,
        setProducts,
        productsChart,
        setProductsChart,
        productsBackup,
        setProductsBackup,
        buyAction,
        removeAction,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
