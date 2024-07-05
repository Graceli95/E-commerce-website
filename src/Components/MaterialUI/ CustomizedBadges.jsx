import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// 对购物车icon组件，通过引入useSelector 来拿到store里面的数据
import { UseSelector, useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  // 通过引入useSelector 来拿到store里面的数据
  let products = useSelector((state) => state.cartItems);
  console.log(products);
  return (
    <IconButton aria-label="cart">
      {/* 使用.length 来拿到购物车icon里的商品数量 */}
      <StyledBadge badgeContent={products.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
