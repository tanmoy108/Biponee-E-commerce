import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserContextHook from "./useContextHook/UserContextHook";
import CategoryContextHook from "./useContextHook/CategoryContextHook";
import CartContextHook from "./useContextHook/CartContextHook";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextHook>
        <CategoryContextHook>
          <CartContextHook>
            <App />
          </CartContextHook>
        </CategoryContextHook>
      </UserContextHook>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
