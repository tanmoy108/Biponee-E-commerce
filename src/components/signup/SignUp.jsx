import React, { useState} from "react";
import { TextField, Button } from "@mui/material";
import {
  createAuthUserWithEmailPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase_utils.js";
import "./Signup.scss";

const SignUp = () => {
  const [current, update] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = current;


  const resetField = () => {
    update({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const textFieldChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    update({
      ...current,
      [inputName]: inputValue,
    });
  };

  const Onsubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match !!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      alert("created !!");
      resetField();
    } catch (err) {
      if (err.code === "auth/weak-password") {
        alert("weak password!! at least 6 character required");
      } else if (err.code === "auth/email-already-in-use") {
        alert("email already in use, try another email");
      } else console.log(`onSubmit signUp error ${err.message}`);
    }
  };

  return (
    <>
      <div className="signup_body">
        <h2 style={{ textAlign: "center" }}>Don't have an account ?</h2>
        <form onSubmit={Onsubmit} className="form">
          <TextField
            sx={{ mb: 1 }}
            label="Name"
            variant="standard"
            type="text"
            onChange={textFieldChange}
            name="displayName"
            value={displayName}
            autoComplete="name_field"
            required
          />
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
            sx={{ mb: 1 }}
            label="Password"
            variant="standard"
            type="password"
            onChange={textFieldChange}
            name="password"
            value={password}
            autoComplete="current_password"
            required
          />
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            variant="standard"
            type="password"
            onChange={textFieldChange}
            name="confirmPassword"
            value={confirmPassword}
            autoComplete="current_confirm_password"
            required
          />
          <Button
            sx={{ mt: 5 }}
            variant="contained"
            type="submit"
            className="signup-button"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
