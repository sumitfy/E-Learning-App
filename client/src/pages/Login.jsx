import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import '../pages/Login.css'
const Login = () => {
  const navigate = useNavigate()
  const { StoreTokenInLS }= useAuth();
  const [User,setUser] = useState({
    email:"",
    password:""
  })
const handleChange=(event)=>{
  const name  = event.target.name;
  const value = event.target.value;
  setUser({
    ...User,
    [name]:value
  })
}
const handleSubmit = async (event)=>{
  event.preventDefault();
  // console.log(User)
  try {
    const response = await fetch('http://localhost:5000/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(User)
    })
    const responseData = await response.json();
    if(response.ok){
      StoreTokenInLS(responseData.token)
      toast.success('Login Successful')
      setUser({email:"",password:""})
      return navigate('/')
    }
    else{
      toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message)
    }
  } catch (error) {
    return console.log(error)
  }
}
  return (
    <>
    {/* <h1>Login form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type="text" name="email" id="email" value={User.email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type="password" name="password" id="password" value={User.password} onChange={handleChange}/>
        </div>
        <button type="submit">Login</button>
      </form> */}
      <div className="login-form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
    </>
  )
}

export default Login