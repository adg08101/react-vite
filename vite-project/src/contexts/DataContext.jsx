import React from "react";
import { Children } from "react";
import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [greet, setGreet] = useState("Hello");

  return (
    <DataContext.Provider value={{ products, setProducts }}>
      {children}
    </DataContext.Provider>
  );
};
