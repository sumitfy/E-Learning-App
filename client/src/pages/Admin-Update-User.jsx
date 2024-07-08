
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth'
import { useParams } from 'react-router-dom';
// import { param } from '../../../server/routes/admin-routes';
import { toast } from 'react-toastify';

const AdminUpdateUser = () => {
    const [Data , setData] = useState({
        username:"",
        email:""
    })
    const params = useParams();
    const {token} = useAuth();
    const currUserdata = async() =>{
        try {
            const response = await fetch(`http://localhost:5000/admin/user/${params.id}`, {
                method:'GET',
                headers:{
                    Authorization : `Bearer ${token}`
                },
            })
            const data = await response.json()
            console.log(data);
            setData(data[0])
        } catch (error) {
            console.log(error)
        }

    }
    const handleSubmit = async(event)=>{
        event.preventDefault()
        try {
            const response = await fetch(`http://localhost:5000/admin/user/update/${params.id}` , {
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}` 
                },
                body : JSON.stringify(Data)
            })
            if(response.ok){
                toast.success('Updated Successfully')
            }
            else{
                toast.error('Error While Updating')
            }
        } catch (error) {
            console.log(error)
        }
        // console.log(Data)
    }
    const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        setData({
            ...Data,
            [name]:value
        })
    }
    useEffect(()=>{
        currUserdata()
    },[])
  return (
    <>  
        <h2>Update User Data</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Name:</label>
                <input type="text" name="username" id="username" value={Data.username} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={Data.email} onChange={handleChange}/>
            </div>
            <button type="submit">Update</button>
        </form>
    </>
  )
}

export default AdminUpdateUser