import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "@reach/router";
import reportWebVitals from "./reportWebVitals";
import Product from "./views/Product";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <App path="/" />
      <Product path="product/:productId" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
