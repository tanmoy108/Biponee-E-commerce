import React from 'react'
import SignUp from "../signup/SignUp.jsx";
import Login from "../login/Login.jsx";
import "./Authentication.scss";

const Authentication = () => {

  return (
    <div className="authentication_container">
      <Login />
      <SignUp />
    </div>
  );
};

export default Authentication;