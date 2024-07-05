import React from "react";
import "./shop.css";
// 引入shop page 的 data
// import shareShop from "../../data/data"; 不需要！

// 通过useSelector拿到store里面的数据,使用dispatch派发action对象
import { UseSelector, useDispatch, useSelector } from "react-redux";
// 引入link跳转
import { Link } from "react-router-dom";
// 使用 boolean 来判断是否进行显示与隐藏
import { useState } from "react";
// 引入派发action的 useDispatch
import { UseDispatch } from "react-redux";
// 引入action对象 addToCarts
import { addToCarts } from "../Action/Actions";
export default function Shop() {
  // let shopData = shareShop();不需要！
  // 组件通过使用useSelector 进而拿到store里面的商品展示数据
  let products = useSelector((state) => state.products);
  // console.log(products);
  let [show, setShow] = useState(true);
  let [indexs, setIndex] = useState(null);
  let showAdd = (index) => {
    setShow(!show);
    setIndex(index);
  };
  let showMove = () => {
    setShow(!show);
    setIndex(null);
  };
  // event.preventDefault()   避免点击时自动跳转下个网页
  // 使用dispatch派发action对象 dispatch(addToCarts(parameter));
  let dispatch = useDispatch();
  let handleAddToBasket = (event, parameter) => {
    event.preventDefault();
    dispatch(addToCarts(parameter));
  };

  return (
    <>
      <div className="shopPageProducts">
        <ul className="ulShopProducts">
          {products.map((item, index) => {
            return (
              <Link to={`/product/${item.parameter}`} key={index}>
                <li
                  className="listProduct"
                  key={item.id}
                  onMouseMove={() => showAdd(index)}
                  onMouseOut={() => showMove(index)}
                >
                  <div className="productImgShop">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="productNameShop">{item.name}</div>
                  <div className="productBrandShop">{item.brand}</div>
                  <div className="productPrice">${item.price}</div>
                  {indexs == index ? (
                    <div
                      className="addBasket"
                      onClick={(event) => {
                        handleAddToBasket(event, item.parameter);
                      }}
                    >
                      Add to Basket
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
