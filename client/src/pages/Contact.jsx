import React, { useState,useEffect } from 'react'
import { useAuth } from '../context/auth'

import '../pages/Contact.css'

const Contact = () => {

  const {user} = useAuth();
  // const {userAutharization} = useAuth()

  const [userData , setUserData] = useState(true)

  const [contact , setContact] = useState({
    username:'',
    email:'',
    message:''
  })

  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:""
    })
    setUserData(false)
  }

  const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setContact({
      ...contact,
      [name]:value
    })
  }
  const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log(contact);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(contact)
      })
      if(response.ok){
        console.log('message sent successfully')
        setContact({
          username:'',
          email:'',
          message:''
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
        {/* <h1>Contact form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Name:</label>
          <input type="text" name="username" id="username" value={contact.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type="text" name="email" id="email" value={contact.email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <input type='textarea' height={200} width={100} name="message" id="message" value={contact.message} onChange={handleChange}/>
        </div>
        <button type="submit">Contact</button>
      </form> */}
        <div className="contact-form-container">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={contact.username}
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
            value={contact.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={contact.message}
            onChange={handleChange}
            required
            className="form-input"
            rows="4"
          />
        </div>
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Contact