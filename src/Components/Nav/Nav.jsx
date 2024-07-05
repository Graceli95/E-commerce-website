import React from "react";
import "./nav.css";
// 引入Link
import { Link } from "react-router-dom";
// icon
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CustomizedBadges from "../MaterialUI/ CustomizedBadges";
import { SwipeableDrawer } from "@mui/material";
import SwipeableTemporaryDrawer from "../MaterialUI/SwipeableTemporaryDrawer";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <div className="navContent">
          <div className="navLeft">
            <div className="logoImg">
              <img
                className="logo"
                src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
                alt=""
              />
            </div>

            <ul className="uls">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/featured">Featured</Link>
              </li>
              <li>
                <Link to="/recommended">Recommended</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navRight">
          <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
        </div>
      </div>
    </>
  );
}
