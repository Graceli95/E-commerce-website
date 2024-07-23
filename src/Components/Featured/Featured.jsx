import React from "react";
import "./featured.css";
import banner from "./banner.png";
import shareFeatured from "../../data/featuredData";
import { Link } from "react-router-dom";

export default function Featured() {
  // let datas =Arrays()
  let datas = shareFeatured();
  return (
    <>
    <div className="featuredPage">
       <div className="bannerIndex">
        <div className="bannerFeatured">
          <div className="bannerLeftFeatured">
            <h1>Featured Products</h1>
          </div>
          <div className="bannerRight">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>

      <div className="showProducts">
        <ul className="ulProducts">
          {datas.map((item, index) => {
            return (
              <Link to={`/product/${item.parameter}`} key={index}>
                <li className="listProducts" key={item.id}>
                  <div className="productImg">
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
    </div>

     
    </>
  );
}
