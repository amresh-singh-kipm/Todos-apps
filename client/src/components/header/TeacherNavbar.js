import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/action/TaskAction";

function TeacherNavbar() {
  const dispatch = useDispatch()
  const handleSignout  = () =>{
    localStorage.clear()
    dispatch(loginUser(false))
  }
  return (
    <div className="container">
      <div className="header">
      <Link to="/teacher">Home</Link>
      <Link to="/teacher/login">Login</Link>
      <Link to="/login" onClick={handleSignout}>Signout</Link>
      <Link to="/teacher/createtask">Create</Link>
      <Link to="/teacher/signup">SignUp</Link>
      </div>
    </div>
  );
}

export default TeacherNavbar;
