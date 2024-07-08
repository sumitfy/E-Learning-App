import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineContacts,MdOutlineRoomService  } from "react-icons/md";
import {Link, Navigate, Outlet} from 'react-router-dom'
import '../layouts/Admin-Layout.css'

import { useAuth } from '../../context/auth';

const AdminLayout = () => {
  const {user, isloading} = useAuth();

  if(isloading){
    return <><h1>Loading ....</h1></>
  }
  if(!user.isAdmin){
    console.log("admin layout" , user)
    return <Navigate to="/"/>
  }
  return (
    <>
        <div className="container">
          <ul id='AdminFunc'>
            <li id='list-item'><Link to ='/admin/users'><FaUserLarge /> Users</Link></li>
            <li id='list-item'><Link to ='/admin/contacts'><MdOutlineContacts /> Contcats</Link></li>
            <li id='list-item'><Link to ='/admin/services'><MdOutlineRoomService /> Services</Link></li>
          </ul>
        </div>
        
        <Outlet/>
    </>
  )
}

export default AdminLayout