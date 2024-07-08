import React , { useEffect, useState } from 'react'
import {useAuth} from '../context/auth'
import {toast} from 'react-toastify'
const AdminContact = () => {
  const [contactData , setContactsData] = useState([])
  const {token} = useAuth();
  const Contactdata = async()=>{
    try {
      const response = await fetch('http://localhost:5000/admin/contacts', {
        method:'GET',
        headers:{
          Authorization : `Bearer ${token}`
        }
      })
      const AllContactData = await response.json()
      setContactsData(AllContactData)
      // console.log(AllContactData)
    } 
    catch (error) {
      console.log(error)
    }
  }
  const deleteContact = async(id) =>{
    try {
      console.log(id);
      const response = await fetch(`http://localhost:5000/admin/contact/delete/${id}`, {
        method:'Delete',
        headers:{
          Authorization : `Bearer ${token}`
        }
      })
      console.log("response",response)
      if(response.ok){
        Contactdata()
        toast.success('Deleted Successfully')
      }
      else{
        toast.error('Error While Deleting')
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    Contactdata()
  },[])
  return (
    <>
     <section>
      <h1>Admin Contacts Panel</h1>
      <div>
        <table>
          <thead>
            <tr>
              <td>Name:</td>
              <td>Email:</td>
              <td>Message:</td>
              <td>Delete:</td>
            </tr>
          </thead>
          <tbody>
            {contactData.map((item,index)=>{
              return <>
                <tr key={index}>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                  <td><button onClick={()=>deleteContact(item._id)}>Delete</button></td>
                </tr>
              </>
            })}
          </tbody>
        </table>
      </div>
     </section>
    </>
  )
}

export default AdminContact