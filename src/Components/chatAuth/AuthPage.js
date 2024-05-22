import React, { useState } from "react";
import axios from "axios";
import "./AuthPage.css";

const AuthPage = (props) => {
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://roommatehuntbackend.onrender.com/authenticate", { username })
      .then((r) => props.onAuth({ ...r.data, secret: username }))
      .catch((e) => console.log("Auth Error", e));
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋 Connect with Your Best Researcher</div>

        <div className="form-subtitle">Enter Your UserName!</div>

        <div className="auth">
          
          <input
            className="auth-input"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;