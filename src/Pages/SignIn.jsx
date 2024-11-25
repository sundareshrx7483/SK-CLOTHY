import React, { useState } from "react";
import "../CSS/signin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { username, password } = state;

  const change = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault(); // Prevent form refresh

    if (!username || !password) {
      alert("Please fill out both fields!");
      return;
    }
    try {
      const { data: Users } = await axios.get("http://localhost:3000/users")
      const userExist = Users.find(
        (user) => user.username === username && user.password === password
      );

      if (userExist) {
        alert("Logged in successfully!");
        setTimeout(() => navigate("/"), 500);
      } else {
        alert("Invalid username or password!");
      }
    } catch (err) {
      console.error(err);
      
    }
  };

  return (
    <div id="signinmain">
      <div id="signin">
        <h1 className="signin-header">Sign In</h1>
        <form onSubmit={submit}>
          <label htmlFor="username" className="signin-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            id="un"
            required
            placeholder="Enter Username"
            className="signin-input"
            onChange={change}
          />

          <label htmlFor="password" className="signin-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            id="pwd"
            required
            placeholder="Enter Password"
            className="signin-input"
            onChange={change}
          />

          <a href="#" className="forgot-link">
            Forgot Password?
          </a>

          <button type="submit" className="signin-btn">
            LOGIN
          </button>
        </form>
        <div id="hr" className="signin-divider">
          <hr className="line" />
          <div className="hr-content">New to Sk Clothy?</div>
          <hr className="line" />
        </div>

        <div id="signuplink">
          <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
