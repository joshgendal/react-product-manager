import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

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
          {/* <Product productInfo={product} /> */}
          <Link to={`/product/${product._id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
