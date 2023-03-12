import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

function AppWrap() {
  console.log("cross-env 注入的环境变量 __DEV__", __DEV__);
  return React.createElement(App);
}

function onError(error: unknown) {
  console.error(error);
}
const dom = document.getElementById("root");
if (dom) {
  const root = ReactDOM.createRoot(dom, {
    onRecoverableError: onError,
  });
  root.render(AppWrap());
}
