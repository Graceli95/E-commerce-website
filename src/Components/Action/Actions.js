// 引入actionTypes里的addToCart
import { addToCart } from "./ActionType";
import { clearCart } from "./ActionType";
// addToCart是action type
// addToCarts 是action 对象，action 对象里有两个属性，分别是type 和 payload
import { increaseQuantity } from "./ActionType";
import { decreaseQuantity } from "./ActionType";
import { removeItem } from "./ActionType";

export let addToCarts = (parameter) => ({
  type: addToCart,
  payload: parameter,
});

export let clearCarts = () => ({
  type: clearCart,
});
export let increaseQuantitys = (parameter) => ({
  type: increaseQuantity,
  payload: parameter,
});
export let decreaseQuantitys = (parameter) => ({
  type: decreaseQuantity,
  payload: parameter,
});
export let removeItems = (parameter) => ({
  type: removeItem,
  payload: parameter,
});
