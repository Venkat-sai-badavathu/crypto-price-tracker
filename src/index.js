import React from "react";
import ReactDOM from "react-dom/client"; // updated import
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import "./styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot instead of render

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
