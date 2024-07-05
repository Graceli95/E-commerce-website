// 从actionType里面引入addToCart, clearCart, increaseQuantity,decreaseQuantity,removeItem
import {
  addToCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../Action/ActionType";
// 引入 data
import shareShop from "../../data/data";
let data = shareShop();
let product = {
  products: data,
  cartItems: [],
};
// 定义reducer函数，reducer函数里面有两个参数 1. state  2. action
let rootReducer = (state = product, action) => {
  switch (action.type) {
    case "addToCart":
      // 解构商品的属性,,  find 是查找并返回数据的
      let { id, name, brand, desc, price, img, size, color, parameter } =
        state.products.find((product) => product.parameter == action.payload);
      // 用 boolean 来判断购物车里是否有该数据， 用来当作判断的 true or false
      // 判断购物车里是否有该数据或该商品，如果有，则让其数量+1，如果没有 则添加进购物车里面
      let existingItem = state.cartItems.find(
        (item) => item.parameter == parameter
      );
      if (existingItem) {
        return {
          // 如果存在该商品，则让该商品的数量 +1
          //  ...state指的是包含两个属性 products和cartItems 一起
          //   结合运用扩展运算符 ...state, cartItems   来进行state和购物车数据的 数据合并更新
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.parameter == parameter
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        //   如果购物车为空时 没有该商品时，去添加 属性quantity：1
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              id,
              name,
              brand,
              desc,
              price,
              img,
              size,
              color,
              parameter,
              quantity: 1,
            },
          ],
        };
      }
    case clearCart:
      // 清空购物车里面的数据时，购物车产品数量为0时
      return { ...state, cartItems: [] };

    default:
      return state;

    case increaseQuantity:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.parameter == action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case decreaseQuantity:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.parameter == action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case removeItem:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.parameter !== action.payload
        ),
      };
  }
};
// 暴露出rootReducer
export default rootReducer;
