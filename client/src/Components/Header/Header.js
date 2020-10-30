import React from "react";
// import { Link } from "react-router-dom";
// import NotePad from '../../styles/assets/icons/notes-icon.png';
import '../../styles/Header.scss';
import Logo from '../Logo/Logo.js';
import Login from '../Login/Login.js';

function Header({ profile, setProfile, name, setName, login, setLogin, fetchProfile }){

    return(
        <div className="header">
            <Logo />
        {/* pass down user info to make backend call for which notes to grab */}
        <Login 
        user={profile} 
        setUser={setProfile} 
        accessProfile={fetchProfile}
        userName={name}
        setuserName={setName}
        loggedIN={login}
        setLoggedIN={setLogin}      
        />
        </div>
    )
}

export default Header;