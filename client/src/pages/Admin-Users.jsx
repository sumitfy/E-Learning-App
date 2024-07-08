import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../context/auth'
const AdminUsers = () => {
  const [usersData, setUsersData] = useState([]);
  const {token} = useAuth();
  const usersdata = async()=>{
    try {
      const response = await fetch('http://localhost:5000/admin/users', {
        method:'GET',
        headers:{
          Authorization : `Bearer ${token}`
        }
      })
      const AllUsersData = await response.json()
      setUsersData(AllUsersData)
      // console.log(`users ${AllUsersData}` )
    } 
    catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async(id)=>{
    const response = await fetch(`http://localhost:5000/admin/users/delete/${id}`, {
      method:'Delete',
      headers:{
        Authorization : `Bearer ${token}`
      }
    })
    if(response.ok){
      usersdata();
    }
    
  }

  useEffect(()=>{
    usersdata()
  },[])
  return (
    <>
      <section>
        <h1>Admin Users Panel</h1>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Update</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {usersData.map((item , index)=>{
              return <>
                <tr key={index}>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                <td><Link to={`/admin/users/update/${item._id}/edit`}>Edit</Link></td>
                  <td><button onClick={()=>deleteUser(item._id)}>Delete</button></td>
                </tr>
              </>
            })}

          </tbody>
        </table>
      </section>
    </>
  )
}

export default AdminUsers