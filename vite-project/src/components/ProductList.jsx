import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function ProductList({ product, onBuy }) {
  const { products, setProducts } = useContext(DataContext);

  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid #ddd",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ margin: "0 0 8px" }}>{product.name}</h3>
      <p style={{ margin: "0 0 12px", fontWeight: "bold" }}>${product.price}</p>

      <button
        onClick={() => onBuy(product)}
        style={{
          padding: "8px 12px",
          background: "#007bff",
          color: "black",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Buy
      </button>
    </div>
  );
}
