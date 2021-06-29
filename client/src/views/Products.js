import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = (props) => {
  console.log("PRODUCTS RENDER");
  const { products, setProducts, formSubmitted } = props;
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [formSubmitted]);
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <a href="">{product.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Products;
