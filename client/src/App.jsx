import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import About from './pages/About'
import Error from './pages/Error'
import Logout from './pages/Logout'
import Services from './pages/Services'
import AdminLayout from './components/layouts/Admin-layout'
import AdminContact from './pages/Admin-Contact'
import AdminUsers from './pages/Admin-Users'
import AdminService from './pages/Admin-Services'
import AdminUpdateUser from './pages/Admin-Update-User'

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='/admin' element = {<AdminLayout/>}>
              <Route path='users' element ={<AdminUsers/>}>Users</Route>
              <Route path='contacts' element ={<AdminContact/>}>Contacts</Route>
              <Route path='services' element ={<AdminService/>}>Services</Route>
              <Route path='users/update/:id/edit' element={<AdminUpdateUser/>} />
          </Route>
          <Route path='*' element={<Error/>}/>
         
        </Routes>
      </BrowserRouter >
    </>

  )
}

export default App