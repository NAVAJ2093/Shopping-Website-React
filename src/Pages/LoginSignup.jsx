import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import "../Pages/CSS/LoginSignup.css";

const LoginSignup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;

    let url;
    const apiKey = "AIzaSyDxztc5BIZzNx2Kcz-3M-O_1r-Hy-5KNhc ";

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          navigate("/");
        } else {
          alert("Signup successful!");
        }
        dispatch(login(data.idToken));
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }
      {
        alert("Error: " + data.error.message);
      }
    } catch (error) {
      console.error("Error authenticating:", error);
    }
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <form onSubmit={handleSubmit}>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <div className="loginsignup-fields">
            <input
              type="email"
              ref={emailRef}
              placeholder="Email Address"
              required
            />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          <p className="loginsignup-login">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span className="toggle-form" onClick={toggleForm}>
              {isLogin ? "Sign up here" : "Login here"}
            </span>
          </p>
        </form>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
