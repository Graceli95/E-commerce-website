import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// 引入组件，配置相关路由
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Featured from "./Components/Featured/Featured";
import Recommended from "./Components/Recommended/Recommended";
import Product from "./Components/Product/Product";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
// 引入路由
// 引入 BrowserRouter, Routes, Route
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="shop" element={<Shop></Shop>}></Route>
          <Route path="featured" element={<Featured></Featured>}></Route>
          <Route
            path="recommended"
            element={<Recommended></Recommended>}
          ></Route>
          <Route path="product" element={<Product></Product>}>
            <Route
              path=":productId"
              element={<ProductDetails></ProductDetails>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
