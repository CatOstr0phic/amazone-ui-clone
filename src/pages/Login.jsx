import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase shittttttttttttttt.

    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      history('/')
    })
    .catch((error) => alert(error.message))
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {

        if (auth) {
          history("/"); 
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="/assets/amazon_PNG11.png" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form
          action="
        "
        >
          <h5>E-mail</h5>
          <input
            type="text"
            vale={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            vale={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signinButton"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>

        <p>
          By my signature, I acknowledge that I have read, understand, and agree
          to the policies and procedures of outpatient treatment as defined in
          the outpatient welcome packet that I received.
        </p>

        <button onClick={register} className="login__registerButton">
          Create Amazon Accaunt
        </button>
      </div>
    </div>
  );
}

export default Login;
