import "./App.css";
import Nav from "./Components/Nav/Nav";
// 引入生命周期钩子函数 useEffect
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// 引入 {Outlet}
import { Outlet } from "react-router-dom";
// 1.从react-redux里面引入Provider
import { Provider } from "react-redux";
// 引入store仓库
import store from "./Components/Store/Store";

function App() {
  let navigate = useNavigate();
  // 使用useEffect函数，[]使用空数组时，是因为只有在第一次使用的时候去执行,第一次打开项目时直接进显示home页面!!!
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    // 将reducer里面的数据保存在store里面，然后在app.jsx里面通过Provider把数据提供供应给各个组件
    <Provider store={store}>
      <div className="App">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
