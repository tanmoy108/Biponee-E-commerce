import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CategoryContextHook from "./useContextHook/CategoryContextHook";
import CartContextHook from "./useContextHook/CartContextHook";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
        <CategoryContextHook>
          <CartContextHook>
            <App />
          </CartContextHook>
        </CategoryContextHook>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
