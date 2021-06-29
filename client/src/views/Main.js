import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";
const Main = () => {
  console.log("main rendered");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product/", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log("SUCCESS");
        console.log(res);
        if (formSubmitted === false) {
          setFormSubmitted(true);
        } else if (formSubmitted === true) {
          setFormSubmitted(false);
        }
      })
      .catch((err) => console.log(err));
  };
  // const getProducts () => {
  //   axios
  //     .get("http://localhost:8000/api/products")
  //     .then((res) => {
  //       console.log(res.data);
  //       setProducts(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <>
      <form action="" onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Products
        products={products}
        setProducts={setProducts}
        formSubmitted={formSubmitted}
      />
    </>
  );
};

export default Main;
