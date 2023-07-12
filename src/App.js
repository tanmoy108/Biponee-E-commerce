import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux"
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase_utils.js";
import { setCurrentUser } from "./redux/user/userAction"

import Home from "./components/routes/home/Home.jsx";
import ShopRoute from "./components/routes/shop/shopRoutes/ShopRoute.jsx";
import Authentication from "./components/routes/authentication/Authentication.jsx";
import Contact from "./components/routes/contact/Contact.jsx"
import Navigation from "./components/navbar/Navigation.jsx";
import CheckOut from "./components/checkOut/checkOutContainer/CheckOut.jsx";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]); //dispatch never change . for eslint error i put dispatch


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
