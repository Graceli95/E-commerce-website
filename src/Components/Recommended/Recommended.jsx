import React from "react";
import "./recommended.css";
import shareRecommended from "../../data/recommendedData";
import { Link } from "react-router-dom";
import banner from "./banner.png";

export default function Recommended() {
  let datas = shareRecommended();
  return (
    <>
      <div className="bannerIndex">
        <div className="banner">
          <div className="bannerLeftword">
            <h1>
              Recommended <br /> Products
            </h1>
          </div>
          <div className="bannerRight">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>

      <div className="showProducts">
        <ul className="ulRecProducts">
          {datas.map((item, index) => {
            return (
              <Link to={`/product/${item.parameter}`} key={index}>
                <li className="listProducts" key={item.id}>
                  <div className="productImgRec">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="productName">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="productBrand">
                    <p>{item.brand}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
