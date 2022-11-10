import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../components/header/Navbar";
import TeacherNavbar from "../../components/header/TeacherNavbar";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import SignUp from "../../pages/SIgnUp";

function TeacherRoute() {
    
  return (
    <Router>
        <TeacherNavbar/>
      <Routes>
        <Route path="/teacher" element={<Home />} />
        <Route path="/teacher/login" element={<Login />} />
        <Route path="/teacher/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default TeacherRoute;
