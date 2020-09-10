import React from "react";
import axios from 'axios';
import '../../styles/Login.scss';
import LogIN from '../../styles/assets/icons/login-icon.png';
import LogOUT from '../../styles/assets/icons/logout-icon-white.png';

function Login({ accessProfile, userName, loggedIN, setLoggedIN }){
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
         setLoggedIN(true)
         accessProfile();
        })
        .catch(error=>console.log('Login error', error));
    }

    const handleLogout = () => {
        localStorage.removeItem('clientAuthToken');
        setLoggedIN(false);
      }

 //when componen mounts is there a token set login state-- 
 //login from here, but state is set state higher in the tree 

 //conditional render show username and welcome and nav cards 
    return(
        <>
        {
         loggedIN === false ?
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
                        type="password" 
                        name="password" 
                        placeholder="Password..."></input>
                        <button 
                        type="submit" 
                        name="login" 
                        className="log-button">
                            Login
                            <img 
                            src={LogIN} 
                            alt="login icon" 
                            className="button_icon"/>
                        </button>
                     </div>
                 </form>
             </div>
             )
               
            : 
            (
            <div className="login">
            <h2 className="log-title">Welcome {userName}</h2>
            <form>
                <button 
                 type="submit"
                 className="log-button">
                     logout
                     <img 
                     src={LogOUT} 
                     alt="login icon" 
                     className="button_icon"
                     onClick={handleLogout}/>
                </button>
            </form>
            </div>
            )


        }
           
        </>
    )
}



export default Login;