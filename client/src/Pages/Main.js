import React, { useState }  from "react";
// import { Link } from 'react-router-dom';
import '../styles/Main.scss';
import axios from 'axios';
import NoAuthMain from '../Components/NoAuthMain/NoAuthMain.js';
import MainAuth from '../Components/MainAuth/MainAuth.js';
import Header from '../Components/Header/Header.js';
import Footer from '../Components/Footer/Footer.js';

// const authToken = () =>localStorage.getItem('userAuthToken')  

function Main (){
    const [ login, setLogin ] = useState(false)
    const [ name, setName ] = useState('')
    const [ profile, setProfile ] = useState(null)
    
    const getProfile=()=>{
        axios.get('http://localhost:8080/notes', {
            headers: { authorization: `Bearer ${authToken()}` }
        })
        .then(res=>{
            console.log('profile response', res.data);
            setProfile(res.data) 
            setLogin(true)
        })
        .catch(err=> console.log('profile error', err));
     }
        return(
            <>
            <Header
            profile={profile}
            setProfile={setProfile}
            name={name}
            setName={setName}
            login={login}
            setLogin={setLogin}
            fetchProfile={getProfile}
            />
            {profile ?
            <MainAuth />:
            <NoAuthMain />}
            <Footer />
            </>
        )
}

export default Main;