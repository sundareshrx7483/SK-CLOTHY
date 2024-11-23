import React, { useState } from "react";
import "../CSS/signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    emailId: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  // const validateEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const submit = async (e) => {
    // e.preventDefault(); 
 

    const { username, emailId, password, cpassword } = userDetails;

    if (!username || !emailId || !password || !cpassword) {
      alert("Please fill out all fields!");
      return;
    }

    // if (!validateEmail(emailId)) {
    //   alert("Please enter a valid email address!");
    //   return;
    // }

    if (password !== cpassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      
      let {Data}= await axios.post("http://localhost:3000/users",{ username, emailId, password})
 console.log(Data);
    } catch (err) {
      console.log(err);
      
  }
   
navigate("/sigin")
   


  };

  return (
    <div id="signup">
      <div className="signup-container">
        <h1 className="signup-header">Sign Up</h1>
        <form onSubmit={submit} method="get">
          <label htmlFor="username" className="signup-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="signup-input"
            placeholder="Enter your username"
            name="username"
            value={userDetails.username}
            onChange={change}
          />

          <label htmlFor="email" className="signup-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="signup-input"
            placeholder="Enter your email"
            name="emailId"
            value={userDetails.emailId}
            onChange={change}
          />

          <label htmlFor="password" className="signup-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="signup-input"
            placeholder="Create a password"
            name="password"
            value={userDetails.password}
            onChange={change}
          />

          <label htmlFor="cpassword" className="signup-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="cpassword"
            className="signup-input"
            placeholder="Confirm your password"
            name="cpassword"
            value={userDetails.cpassword}
            onChange={change}
          />

          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
