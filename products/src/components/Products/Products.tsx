import React, { useEffect } from "react";

import { fetchProducts, selectProducts } from "store/features/products/slice";
import { useAppDispatch, useAppSelector } from "store/app/hooks";

import "./Products.css";
import Product from "../Product/Product";

interface Props {}

const Products = (props: Props) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts).all;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  );
};

export default Products;
