import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function ProductChartDataContext({ onBuy }) {
  const { productsChart, totalMoneyOnChart, removeAction } =
    useContext(DataContext);

  return (
    <>
      <h2>Product Chart Data Context</h2>
      {productsChart.map((p) => (
        <div
          key={`chart${p.name}`}
          style={{
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ margin: "0 0 8px" }}>{p.name}</h3>
          <p style={{ margin: "0 0 12px", fontWeight: "bold" }}>${p.price}</p>

          <p style={{ margin: "0 0 12px", fontWeight: "bold" }}>
            Quantity: {p.quantity}
          </p>
          <p style={{ margin: "0 0 12px", fontWeight: "bold" }}>
            Total price: ${p.quantity * p.price}
          </p>

          <button
            onClick={() => removeAction(p)}
            style={{
              padding: "8px 12px",
              background: "#FF0000",
              color: "black",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <p>
        <strong>Total money on chart: ${totalMoneyOnChart()}</strong>
      </p>
    </>
  );
}
