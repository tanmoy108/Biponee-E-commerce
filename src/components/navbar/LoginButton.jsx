import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase_utils.js";
import "./LoginButton.scss"

const LoginButton = (props) => {
  const { className} = props;
  const currentUser = useSelector((state)=>state.userKey.currentUser)

  return (
    <div className="navigation_login_button">
      {currentUser ? (
        <span className={className} onClick={signOutUser}>
          SIGN OUT
        </span>
      ) : (
        <Link to="/auth" className={className}>
          LOGIN
        </Link>
      )}
    </div>
  );
};

export default LoginButton;
