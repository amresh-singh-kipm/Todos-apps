import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentNavbar from "../../components/header/StudentNavbar";
import CreateTask from "../../pages/CreateTask";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
function PublicRoute() {
  return (
    <Router>
      <StudentNavbar />
      <Routes>
        <Route path="/student" element={<Home />} />
        <Route path="/student/createtask" element={<CreateTask />} />
        <Route path="/student/login" element={<Login />} />
        <Route path="/student/signup" element={<SignUp />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default PublicRoute;
