import React, { useState } from 'react'
import { config } from '../utils/constApi'

function Login() {
    const [userInfo,setUserInfo] = useState({email:"",password:""})
    const signIn = (user) =>{
        fetch(`${config.host}${config.auth.signIn}`,{
            method:'POST',
            headers:config.headers,
            body:JSON.stringify(user)
        })
        .then((resp)=>console.log(resp))
        .catch((error)=>console.log(error))
    }

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUserInfo({...userInfo,[name]:value})
    }
    
    const onSubmit = (e) =>{
        e.preventDefault()
        signIn(userInfo)
    }

  return (
    <div>
        <form>
            <label htmlFor='email'>Email</label>
            <input type="email" value={userInfo.email} name="email" onChange={handleChange}/>
             <label htmlFor='password'>Password</label>
         <input type="password" value={userInfo.password} name="password" onChange={handleChange}/>
         <button onClick={onSubmit} >Login</button>
        </form>
    </div>
  )
}

export default Login