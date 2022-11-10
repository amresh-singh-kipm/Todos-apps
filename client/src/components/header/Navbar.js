import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/action/TaskAction";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const handleSignout = () => {
  //   localStorage.clear();
  //   dispatch(loginUser(false));
  //   navigate("/login");
  // };
  return (
    <div className="container">
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="#">Signout</Link>
        <Link to="/createtask">Create</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
}

export default Navbar;
