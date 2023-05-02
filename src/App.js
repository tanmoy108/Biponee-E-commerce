import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/Home.jsx";
import ShopRoute from "./components/routes/shop/shopRoutes/ShopRoute.jsx";
import Authentication from "./components/routes/authentication/Authentication.jsx";
import Contact from "./components/routes/contact/Contact.jsx"
import Navigation from "./components/navbar/Navigation.jsx";
import CheckOut from "./components/checkOut/checkOutContainer/CheckOut.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<ShopRoute />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
