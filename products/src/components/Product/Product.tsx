import React from "react";

import "./Product.css";
import { IProduct } from "../../types";

interface Props {
  product: IProduct;
}

const Product = ({ product }: Props) => {
  return (
    <div className="product">
      <img className="image" src={product.image} alt={product.name} />

      <h3 className="name">{product.name}</h3>

      <div className="price">{product.price} €</div>

      <p className="description">{product.description}</p>
    </div>
  );
};

export default Product;
