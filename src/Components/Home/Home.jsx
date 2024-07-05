import React from "react";
import "./home.css";
import shareHomeFeaturedData from "../../data/homeFeaturedData";
import shareRecommended from "../../data/recommendedData";
import { Link, useNavigate } from "react-router-dom";
import banner from "./banner.png";

export default function Home() {
  let homeFeaturedDatas = shareHomeFeaturedData();
  // console.log(homeFeaturedDatas);
  let recommendedData = shareRecommended();
  let navigate = useNavigate();

  let shopNowClick = () => {
    navigate("/shop");
  };
  let handleFeaturedSee = () => {
    navigate("/featured");
  };
  let handleRecommendSee = () => {
    navigate("/recommended");
  };

  return (
    <>
      <div className="homePage">
        <div className="bannerIndex">
          <div className="banner">
            <div className="bannerLeft">
              <div className="bannerLeftDescrip">
                <h1>
                  <strong>See</strong> everything <br /> with
                  <strong> Clarity</strong>
                </h1>
                <p>
                  Buying eyewear should leave you happy and good-looking, with
                  money in your pocket. Glasses, sunglasses, and contacts—we’ve
                  got your eyes covered.
                </p>
                <div className="shopNow" onClick={shopNowClick}>
                  Shop Now
                </div>
              </div>
            </div>
            <div className="bannerRight">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>
        <div className="featuredSeeAllPart">
          <div className="featuredSeeAll">
            <h1 className="featuredProducts">Featured Products</h1>
            <div className="featuredSee" onClick={handleFeaturedSee}>
              See All
            </div>
          </div>
        </div>

        <div className="showProducts">
          <ul className="ulShowProducts">
            {homeFeaturedDatas.map((item, index) => {
              return (
                <Link to={`/product/${item.parameter}`} key={index}>
                  <li className="listProducts" key={index.id}>
                    <div className="productImgHome">
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

        <div className="featuredSeeAllPart">
          <div className="featuredSeeAll">
            <h1 className="featuredProducts">Recommended Products</h1>
            <div className="featuredSee" onClick={handleRecommendSee}>
              See All
            </div>
          </div>
        </div>

        <div className="showProducts">
          <ul className="ulShowProducts">
            {recommendedData.map((item, index) => {
              return (
                <Link to={`/product/${item.parameter}`} key={index}>
                  <li className="listProducts" key={index.id}>
                    <div className="productImgHome">
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
