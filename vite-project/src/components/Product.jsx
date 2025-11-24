import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import "./css/Product.css";

export default function Product({ id }) {
  const { products } = useContext(DataContext);

  const product = products.find((p) => p.id == id);

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>

        <p className="product-category">{product.category}</p>

        <p className="product-price">${product.price}</p>

        <p className="product-stock">
          Stock: <strong>{product.stock}</strong>
        </p>
      </div>
      <Link to={"/shopping"}>
        <button>Back</button>
      </Link>
    </div>
  );
}
