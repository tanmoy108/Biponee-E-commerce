import React,{useState} from "react";
import { TextField, Button } from "@mui/material";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailPassword,
} from "../../utils/firebase/firebase_utils.js";
import "./Login.scss";

const Login = () => {
  const [current, update] = useState({
    email: "",
    password: "",
  });


  const { email, password } = current;

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const resetField = () => {
    update({
      email: "",
      password: "",
    });
  };

  const textFieldChange = (e) => {
    const { name, value } = e.target;

    update({
      ...current,
      [name]: value,
    });
  };

  const Onsubmit = async (e) => {
    e.preventDefault();

    try {
     await signInAuthUserWithEmailPassword(email, password);
      resetField();
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        default:
          console.log(`onSubmit signIn error ${err.message}`);
          break;
      }
    }
  };

  return (
    <>
      <div className="login_body">
        <h2 style={{ textAlign: "center" }}>Already have an account ?</h2>
        <form onSubmit={Onsubmit} className="form">
          <TextField
            sx={{ mb: 1 }}
            label="Email"
            variant="standard"
            type="email"
            onChange={textFieldChange}
            name="email"
            value={email}
            autoComplete="email_field"
            required
          />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            onChange={textFieldChange}
            name="password"
            value={password}
            autoComplete="current_password"
            required
          />
          <div className="button_group">
            <Button variant="contained" type="submit">
              Log In
            </Button>
            <Button sx={{ mt: 1 }} variant="contained" onClick={logGoogleUser}>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
