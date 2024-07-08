import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth'
const Logout = () => {
    const {RemoveTokenFromLS} = useAuth();
    useEffect(() => {
        RemoveTokenFromLS();
      }, [RemoveTokenFromLS]);
    
  return (
    <Navigate to='/login'/>
  )
}

export default Logout