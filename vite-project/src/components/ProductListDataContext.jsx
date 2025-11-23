import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function ProductListDataContext({ onBuy }) {
  const { products, setProducts } = useContext(DataContext);

  return (
    <>
      <h2>Product List Data Context</h2>
      {products.map((p) => (
        <div
          style={{
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ margin: "0 0 8px" }}>{p.name}</h3>
          <p style={{ margin: "0 0 12px", fontWeight: "bold" }}>${p.price}</p>

          <button
            onClick={() => onBuy(p)}
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
      ))}
    </>
  );
}
