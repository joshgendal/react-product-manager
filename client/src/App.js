import React, { useState } from "react";
import "./App.css";
import Form from "./views/Form";
import Products from "./views/Products";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [products, setProducts] = useState([]);
  return (
    <div className="App">
      <Form setFormSubmitted={setFormSubmitted} />
      <Products products={products} setProducts={setProducts} formSubmitted />
    </div>
  );
}

export default App;
