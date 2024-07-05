import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// 引入购物车icon组件
import CustomizedBadges from "./ CustomizedBadges";
// 引入useSelector 来拿到store里面的数据
import { useSelector, useDispatch } from "react-redux";
// 引入action对象， 然后使用dispatch 派发action
import { clearCarts } from "../Action/Actions";
import { increaseQuantitys } from "../Action/Actions";
import { decreaseQuantitys } from "../Action/Actions";
import { removeItems } from "../Action/Actions";
// 引入样式
import "./drawer.css";

export default function SwipeableTemporaryDrawer() {
  // 通过引入useSelector 来拿到store里面的数据
  // 购物车里面的数据
  let products = useSelector((state) => state.cartItems);
  let dispatch = useDispatch();
  // 清空购物车
  let handleClearBasket = () => {
    dispatch(clearCarts());
  };
  // 增加数量
  let handleIncreaseQuantity = (parameter) => {
    dispatch(increaseQuantitys(parameter));
  };
  // 减少数量
  let handleDecreaseQuantity = (parameter) => {
    dispatch(decreaseQuantitys(parameter));
  };
  // 从购物车里删除某个商品
  let handleRemoveItem = (parameter) => {
    dispatch(removeItems(parameter));
  };
  // 计算商品总和
  let getTotalPrice = () => {};
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      className="box1"
    >
      {/* list里面是购物车里面展示的数据 */}
      <div className="box">
        <div className="basket">
          <div className="left">
            <h1>
              My Basket <span>({`${products.length} items`})</span>
            </h1>
          </div>
          <div className="right">
            <div className="close" onClick={toggleDrawer(anchor, false)}>
              Close
            </div>
            <div className="clearBasket" onClick={() => handleClearBasket()}>
              Clear Basket
            </div>
          </div>
        </div>
        <ul>
          {products.map((item, index) => {
            return (
              <li key={index} className="cartItemList">
                <div className="quantity">
                  <div className="quantityLeft">
                    <div
                      className="increase"
                      onClick={() => handleIncreaseQuantity(item.parameter)}
                    >
                      +
                    </div>
                    <div
                      className="decrease"
                      onClick={() => handleDecreaseQuantity(item.parameter)}
                    >
                      -
                    </div>
                  </div>
                  <div className="quantityRight">
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className="itemDetails">
                  <div className="itemName">{item.name}</div>
                  <div className="quantityWord">Quantity</div>
                  <div className="itemQuantity">{item.quantity}</div>
                </div>
                <div className="sizeColor">
                  <div className="itemSize">
                    <div className="size">Size</div>
                    <div className="sizeNumber"></div>
                  </div>
                  <div className="itemColor">
                    <div className="color">Color</div>
                    <div className="colorSelect">{item.color[0]}</div>
                  </div>
                </div>
                <div className="price">
                  <div className="itemPrice">${item.price * item.quantity}</div>
                  <div
                    className="delete"
                    onClick={() => handleRemoveItem(item.parameter)}
                  >
                    x
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {/* // 引入购物车icon组件 */}
            <CustomizedBadges></CustomizedBadges>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
//需要拿到购物车里面的数据，然后才能拿到购物车里cartItems的数量
