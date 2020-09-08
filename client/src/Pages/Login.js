import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/Login.scss';

function Login(){
 const [ login, setLogin ] = useState(false)
 const [ profile, setProfile ] = useState(null)

 //handle submit to login
 const handleLogin =e=>{
     e.preventDefault();
     const username = e.target.username;
     const password = e.target.password;
     axios.post('http://localhost:8080/login',{
         username: username.value,
         password: password.value
     })
     .then(res=>{
         console.log('Login sucessful: ', res.data);
         localStorage.setItem('userAuthToken',res.data.token);
         setLogin(true)
         getProfile();
        })
        .catch(error=>console.log('Login error', error));
    }

 const getProfile=()=>{
    const authToken = localStorage.getItem('userAuthToken');
    console.log('auth token is: ', authToken);
    axios.get('http://localhost:8080/notes', {
        headers: { authorization: `Bearer ${authToken}` }
    })
    .then(res=>{
        console.log('profile response', res.data);
        setProfile(res.data)
        setLogin(true)
    })
    .catch(err=> console.log('profile error', err));
 }

 //onclick to handle logout
    return(
            <>
            <div className="log-box">
                <h2 className="log-title">Please Login</h2>
                <form onSubmit={handleLogin}>
                <div className="log-box2">
                    <label className="log-label">Email</label>
                    <input 
                    type="text" 
                    name="username" 
                    placeholder="Username..."></input>
                    <label className="log-label">Password</label>
                    <input 
                    type="text" 
                    name="password" 
                    placeholder="Password..."></input>
                </div>
                <div className="log-box3">
                    <button 
                    type="submit" 
                    name="login" 
                    className="log-button">Login</button>
                </div>
                </form>
            </div>
            </>
    )
}



export default Login;