import React, { useState } from 'react'
import { config } from '../utils/constApi'

function SignUp() {
    const [userInfo,setUserInfo] = useState({name:"",email:"",password:""})
    const signUp = (user) =>{
        fetch(`${config.host}${config.auth.signUp}`,{
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
        signUp(userInfo)
    }

  return (
    <div>
        <form>
        <label htmlFor='name'>Name</label>
            <input type="name" value={userInfo.name} name="name" onChange={handleChange}/>
            <label htmlFor='email'>Email</label>
            <input type="email" value={userInfo.email} name="email" onChange={handleChange}/>
             <label htmlFor='password'>Password</label>
         <input type="password" value={userInfo.password} name="password" onChange={handleChange}/>
         <button onClick={onSubmit} >SignUp</button>
        </form>
    </div>
  )
}

export default SignUp