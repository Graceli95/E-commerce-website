import React from "react";
import "./productDetails.css";
import shareShop from "../../data/data";
// 获取传递的参数 params
// 引入useParams
import { useParams } from "react-router-dom";
import { getData } from "../../data/data";
import SelectAutoWidth from "../MaterialUI/SelectAutoWidth";
// 引入useNavigate
import { useNavigate } from "react-router-dom";
// 引入action对象 addToCarts
import { addToCarts } from "../Action/Actions";
// 引入 useDispatch
import { UseDispatch, useDispatch } from "react-redux";

export default function ProductDetails() {
  let params = useParams();
  console.log(params);
  // 属性值params.productId
  // 拿到商品详情页的数据
  let datas = getData(params.productId);
  // console.log(datas);

  let navigate = useNavigate();
  let handleClick = () => {
    navigate("/shop");
  };
  let dispatch = useDispatch();
  // 添加至购物车，handleAddToBasket 函数，传入 parameter是因为需要传入一个参数
  // 先用 dispatch 派发 action对象后，然后reducer函数那边会处理数据
  let handleAddToBasket = (parameter) => {
    dispatch(addToCarts(parameter));
  };

  // let setColor = (parameter) => {
  //   (currentCOlor = parameter), setColor;
  // };
  return (
    <>
      <div className="productDetails">
        <div className="detailsShow">
          <div className="backToShop" onClick={handleClick}>
            Back to shop
          </div>
          <div className="productInfo">
            <div className="productInfoLeft">
              <div className="productLeftWrapper">
                <img src={datas.img} alt="" />
              </div>
            </div>
            <div className="productInfoMiddle">
              <img src={datas.img} alt="" />
            </div>
            <div className="productInfoRight">
              <div className="content">
                <div className="infoBrand">{datas.brand}</div>
                <div className="infoName">{datas.name}</div>
                <div className="infoDesc">{datas.desc}</div>
                <hr />
                <div className="frameSize">
                  <div className="lensWidth">Lens Width and Frame Size</div>
                  <SelectAutoWidth></SelectAutoWidth>
                  <div className="selectColor">
                    <div className="chooseColor">Choose Color</div>
                    <ul className="colorShows">
                      {datas.color.map((item, index) => {
                        return (
                          <li
                            key={index}
                            style={{ backgroundColor: `${datas.color[index]}` }}
                            className="choose"
                            // onClick={(item) => setColor(datas.color[index])}
                          ></li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="infoPrice">${datas.price}</div>
                  <div className="addbasket">
                    <button
                      className="buttons"
                      onClick={() => handleAddToBasket(datas.parameter)}
                    >
                      Add to basket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
