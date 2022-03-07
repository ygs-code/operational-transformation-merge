/*
 * @Date: 2022-03-04 14:09:55
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-03-04 14:43:10
 * @FilePath: /operational-transformation.github.com/src/index.tsx
 * @Description: 
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
// 热更新
if (import.meta.hot) {
  import.meta.hot.accept();
}
