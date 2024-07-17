import React from 'react'
import { useContext,useState } from 'react';
import Usercontext from '../context/Usercontext';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const {setUser} = useContext(Usercontext) 

    const handlesubmit=(e)=>{
      e.preventDefault()
      setUser({username,password})

    }

    

  return (
    <>
      <input type="text"  value={username} onChange={(e)=>{
        setUsername(e.target.value);
      }} />
      <br />
      <br />
      <input type="password"  value={password} onChange={(e)=>{
        setPassword(e.target.value);
      }} />
      <br />
      <br />
      <input type="submit" onClick={(e)=>
        handlesubmit(e)
                
      } />

    </>
  )
}

export default Login;
