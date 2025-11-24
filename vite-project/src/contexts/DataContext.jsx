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

  const addItemAction = (item) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => {
        if (p.id === item.id) {
          if (p.stock <= 0) {
            alert(`No stock available for ${p.name}`);
            return p;
          }

          return {
            ...p,
            quantity: p.quantity + 1,
            stock: p.stock - 1,
          };
        }

        return p;
      })
    );
  };

  const removeItemAction = (item) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => {
        if (p.id === item.id) {
          if (p.quantity <= 0) {
            alert(`No more items of ${p.name} to remove`);
            return p;
          }

          return {
            ...p,
            quantity: p.quantity - 1,
            stock: p.stock + 1,
          };
        }

        return p;
      })
    );
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
        addItemAction,
        removeItemAction,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
