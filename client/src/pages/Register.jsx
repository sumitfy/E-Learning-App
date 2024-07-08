import React, { useState } from 'react'
import '../pages/Register.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'
import {toast} from 'react-toastify'

const Register = () => {
  const {StoreTokenInLS} = useAuth();
  const Navigate = useNavigate();
  const [User , setUser] = useState({
    username : "",
    email : "",
    password : ""
  })

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setUser({
      ...User,
      [name] : value
    })
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log("User",User)
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method:'POST',
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(User)
      })
      const responseData = await response.json();
      console.log("responseData" , responseData);
      if (response.ok) {
        StoreTokenInLS(responseData.token)
        toast.success("registration successful");
        setUser({ username: "", email: "", password: "" });
        Navigate('/')
      }
      else{
        toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <>
     {/* <div id='Rpage'>
     <h1 id='Rheading'>Registration Form</h1>
    <div id='wrapper'>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="username">Name:</label>
              <input type="text" name="username" id="username" value={User.username} onChange={handleChange} />
          </div>
          <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" value={User.email} onChange={handleChange} />
          </div>
          <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" value={User.password} onChange={handleChange} />
          </div>
          <button type="submit">Register</button>
      </form>
    </div>
     </div> */}
     <div id="Rpage">
      <h1 id="Rheading">Registration Form</h1>
      <div id="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={User.username}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={User.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={User.password}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register