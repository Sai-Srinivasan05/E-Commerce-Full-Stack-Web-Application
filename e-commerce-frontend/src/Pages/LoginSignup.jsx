import React, { useState, useEffect } from "react";
import "./CSS/LoginSignup.css";
// import { animate } from 'animejs';

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({username:"",email:"",password:""});

  useEffect(() => {
    // Animations temporarily disabled for compatibility
    // animate({ targets: '.loginsignup-container', translateY: [50, 0], opacity: [0, 1], duration: 800 });
    // animate({ targets: '.loginsignup-fields input', translateY: [30, 0], opacity: [0, 1], duration: 600, delay: 100 });
  }, []);

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    }

  const login = async () => {
    console.log('Login attempt with:', formData);
    let dataObj;
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
    
    try {
      await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((resp) => resp.json())
        .then((data) => {dataObj=data});
        
        console.log('Login response:', dataObj);
        if (dataObj.success) {
          localStorage.setItem('auth-token',dataObj.token);
          // Success - redirect immediately
          setTimeout(() => window.location.replace("/"), 300);
        }
        else {
          alert(dataObj.errors);
        }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  }

  const signup = async () => {
    console.log('Signup attempt with:', formData);
    let dataObj;
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
    
    // Validation
    if (!formData.username || !formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
    
    try {
      await fetch(`${apiUrl}/signup`, {
        method: 'POST',
        headers: {
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((resp) => resp.json())
        .then((data) => {dataObj=data});

        console.log('Signup response:', dataObj);
        if (dataObj.success) {
          localStorage.setItem('auth-token',dataObj.token);
          // Success - redirect immediately
          setTimeout(() => window.location.replace("/"), 300);
        }
        else {
          alert(dataObj.errors);
        }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler}/>:<></>}
          <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler}/>
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler}/>
        </div>

        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>

        {state==="Login"?
        <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
        :<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
