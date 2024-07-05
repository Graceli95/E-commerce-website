// 1.引入createStore从redux
import { createStore } from "redux";
// 2.引入reducer函数
import rootReducer from "../Reducer/ReducerOne";
// 3.将reducer里面的数据保存在store里面
let store = createStore(rootReducer);
// 4.暴露出来store仓库，方便其他组件去使用
export default store;
// 最后一步，需要去APP.jsx里面通过Provider 把数据提供供应给各个组件，
