import { NavLink, Outlet,} from "react-router";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

// john@mail.com changeme

function Login() {


  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate();
  const handleLogin = ()=> {
    const payload = {
      email: email,
      password: password
    }

    console.log("output", payload)
    axios.post('https://api.escuelajs.co/api/v1/auth/login', payload)
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.access_token));
      console.log("Login Successful",res)
      navigate("/user/profile");

    })
    .catch((err) => {
      console.log("Login Failed", err)
    })
  }
  return <>
    <div className="wrapper">
    <h2>Log in</h2>
    <form className="form" action="#">
      <div className="input-box">
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" required />
      </div>
      <div className="input-box">
        <input onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="true" placeholder="Enter your password" required />
      </div>
      <div className="input-box button">
        <input onClick={handleLogin} type="Submit" />
        <div className="text">
        <h3>New User? <NavLink to="/user/register" >Register here</NavLink></h3>
      </div>
      </div>
    </form>
    <Outlet />
  </div>
    <h4><NavLink to="/" >Go to homepage</NavLink></h4>
  </>;
}

export default Login;
