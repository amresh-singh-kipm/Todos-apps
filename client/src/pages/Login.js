import React, { useEffect, useState } from "react";
import { config } from "../utils/constApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action/TaskAction";

function Login() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();


  const dispatch = useDispatch();

  const signIn = (user) => {
    return fetch(`${config.host}${config.auth.signIn}`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signIn(userInfo).then((resp) => {
      if(resp?.result[0]){
          if(resp?.result[0]?.role==="STUDENT"){
              navigate("/student")
              localStorage.setItem("roleOfUser",resp?.result[0]?.role)
              dispatch(loginUser(true))
              localStorage.setItem("token",resp.token)
            return;
        }
        if(resp?.result[0]?.role==="TEACHER"){
            navigate("/teacher")
            localStorage.setItem("roleOfUser",resp?.result[0]?.role)
        dispatch(loginUser(true))
        localStorage.setItem("token",resp.token)
            return;
        }
        
      } 
      else if(resp==null){
        dispatch(loginUser(false))
      }
      else {
        dispatch(loginUser(true))
        localStorage.setItem("token",resp.token)
        navigate("/");
      }
    });
  };


  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={userInfo.email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={userInfo.password}
          name="password"
          onChange={handleChange}
        />
        <button onClick={onSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
