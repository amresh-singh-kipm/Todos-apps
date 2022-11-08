import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from '../../components/header/Navbar';
import CreateTask from '../../pages/CreateTask';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import SignUp from '../../pages/SIgnUp';
function PublicRoute() {
  return (
    <div>
        <Router>
      <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/createtask' element={<CreateTask/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>

            </Routes>
        </Router>
    </div>
  )
}

export default PublicRoute