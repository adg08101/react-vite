import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { Link } from "react-router-dom";

export default function ProductList() {
  const { products, buyAction, addItemAction, removeItemAction } =
    useContext(DataContext);

  return (
    <>
      <h2>Product List Data Context</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
          padding: "20px",
        }}
      >
        {products.map(
          (p) =>
            p.onList && (
              <div
                key={p.id}
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Link to={`/product/${p.id}`}>
                  <strong>{p.name}</strong>
                </Link>
                <p>Price: ${p.price}</p>
                <p>Stock: {p.stock}</p>
                <button onClick={() => buyAction(p)}>Buy</button>{" "}
                <button onClick={() => addItemAction(p)}>+</button>{" "}
                <span>
                  {" "}
                  <strong>{p.quantity}</strong>{" "}
                </span>{" "}
                <button onClick={() => removeItemAction(p)}>-</button>
              </div>
            )
        )}
      </div>
    </>
  );
}
