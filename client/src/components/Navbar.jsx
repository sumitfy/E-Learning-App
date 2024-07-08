import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'
import { useAuth } from '../context/auth'
const Navbar = () => {
  const {user , isAdmin} = useAuth();
  const {isloggedin} = useAuth();
  console.log("login or not ", isloggedin);
  return (
    <>
       {/* <div id='container'>
          <div id='heading'><h1>Coredemy</h1></div>
          <div>
          <ul id='list-items'>
              <li id='list-item'><Link to ='/'>Home</Link></li>
              <li id='list-item'><Link to ='/service'>Courses</Link></li>
              <li id='list-item'><Link to ='/about'>About</Link></li>
              <li id='list-item'><Link to ='/contact'>Contact</Link></li>
              {isAdmin ?  <li id='list-item'><Link to ='/admin'>Admin</Link></li> : <></>}
              { isloggedin ?
              (
                <li id='list-item'><Link to ='/logout'>Logout</Link></li>
              )
              : (
                <>
                   <li id='list-item'><Link to ='/login'>Login</Link></li>
                   <li id='list-item'><Link to ='/register'>Register</Link></li>
                </>
                )
              }
          </ul>
          </div>
       </div> */}
       <div id="container">
      <div id="heading">
        <h1>Coredemy</h1>
      </div>
      <nav>
        <ul id="list-items">
          <li className="list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/service">Courses</Link>
          </li>
          <li className="list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="list-item">
            <Link to="/contact">Contact</Link>
          </li>
          {isAdmin && (
            <li className="list-item">
              <Link to="/admin">Admin</Link>
            </li>
          )}
          {isloggedin ? (
            <li className="list-item">
              <Link to="/logout">Logout</Link>
            </li>
          ) : (
            <>
              <li className="list-item">
                <Link to="/login">Login</Link>
              </li>
              <li className="list-item">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Navbar