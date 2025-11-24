import React from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { DataProvider } from ".././contexts/DataContext";

export default function ProductContext() {
  const params = useParams();

  return (
    <>
      <DataProvider>
        <Product id={params.id}></Product>
      </DataProvider>
    </>
  );
}
