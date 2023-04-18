import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Shop from "./components/shop/Shop.jsx";
import Authentication from "./components/authentication/Authentication.jsx";
import Contact from "./components/contact/Contact.jsx"
import Navigation from "./components/navbar/Navigation.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
