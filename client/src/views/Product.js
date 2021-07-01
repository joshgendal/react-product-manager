import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

const Product = (props) => {
  const { productId } = props;
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${productId}`)
      .then((product) => setProduct(product.data.product[0]))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
