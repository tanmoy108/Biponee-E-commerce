import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../useContextHook/UserContextHook.jsx";
import { signOutUser } from "../../utils/firebase/firebase_utils.js";
import "./LoginButton.scss"

const LoginButton = (props) => {
  const { className} = props;


  const { currentUser} = useContext(userContext);

  return (
    <div className="navigation_login_button">
      {currentUser ? (
        <span className={className} onClick={signOutUser}>
          Signout
        </span>
      ) : (
        <Link to="/auth" className={className}>
          Login
        </Link>
      )}
    </div>
  );
};

export default LoginButton;
