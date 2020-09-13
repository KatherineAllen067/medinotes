import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Header.scss';
import NotePad from '../../styles/assets/icons/notes-icon.png';
import Login from '../Login/Login.js';

function Header({ profile, setProfile, name, setName, login, setLogin, fetchProfile }){

    return(
        <>
        <div className="header">
            <Link to="/" className="header__link">
                <h1 className="header-title">MediNotes
                <img src={NotePad} alt="pencil" className="header-icon"/>
                </h1>
            </Link>
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
        </>
    )
}



export default Header;