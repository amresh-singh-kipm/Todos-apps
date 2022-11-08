import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTask } from "../../redux/action/TaskAction";

function Navbar() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTask());
  // }, []);
  return (
    <div className="container">
      <div className="header">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/createtask">Create</Link>
      <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
}

export default Navbar;
