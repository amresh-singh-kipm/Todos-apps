import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from '../../components/header/Navbar'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import SignUp from '../../pages/SIgnUp'

function OpenRoute() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
  )
}

export default OpenRoute