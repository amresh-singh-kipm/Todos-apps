import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/action/TaskAction";

function StudentNavbar() {
  const dispatch = useDispatch()
  const handleSignout  = () =>{
    localStorage.clear()
    dispatch(loginUser(false))
  }
  return (
    <div className="container">
      <div className="header">
      <Link to="/student">Home</Link>
      <Link to="/student/login">Login</Link>
      <Link to="/login" onClick={handleSignout}>Signout</Link>
      <Link to="/student/createtask">Create</Link>
      <Link to="/student/signup">SignUp</Link>
      </div>
    </div>
  );
}

export default StudentNavbar;
