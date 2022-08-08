import React from 'react'
import { useState } from 'react';
import  useRouter  from 'next/router';
import axios from 'axios';
function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const router = useRouter

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = (e) => {
    console.log({email,password})
    axios.get(`http://localhost:3000/user?email=${email}&password=${password}`,{
      email: email,
      password: password,
    }).then(result=>{
      console.log(result.data)
      if(result.data.length===0){
        alert("Invalid Entry")
      }
      else{
        router.push('/')
      }
    })
    .catch(error=> {
      alert('Wrong inputs!!')
    })
  }
  

  return (
    <div>
      Email : <input value={email} onChange={handleEmail} type="text"></input><br />
      Password : <input value={password} onChange={handlePassword} type="password"></input><br />
      <button onClick={handleApi}>Login</button>
    </div>
  );
}

export default Login;
