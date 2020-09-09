import React, { useState } from "react";
import axios from 'axios';
import '../styles/Login.scss';
import LogIN from '../styles/assets/icons/login-icon.png';
import LogOUT from '../styles/assets/icons/logout-icon-white.png';

function Login(){
 const [ login, setLogin ] = useState(false)
 const [name, setName] = useState('')
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
        setName(res.data.tokenInfo.username)
        setLogin(true)
    })
    .catch(err=> console.log('profile error', err));
 }

 //onclick to handle logout

 //conditional render show username and welcome and nav cards 
    return(
        <>
        {
         login === false ?
            (
             <div className="log-box">
                 <form onSubmit={handleLogin}>
                     <div className="form-row">
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
                        <button 
                        type="submit" 
                        name="login" 
                        className="log-button">
                            Login
                            <img src={LogIN} alt="login icon" className="button_icon"/>
                        </button>
                     </div>
                 </form>
             </div>
             )
               
            : 
            (
            <div className="login">
            <h2 className="log-title">Welcome {name}</h2>
            <form>
                <button 
                 type="submit"
                 className="log-button">
                     logout
                     <img src={LogOUT} alt="login icon" className="button_icon"/>
                </button>
            </form>
            </div>
            )


        }
           
        </>
    )
}



export default Login;