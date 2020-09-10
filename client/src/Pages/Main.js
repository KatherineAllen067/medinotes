import React, { useState }  from "react";
import { Link } from 'react-router-dom';
import '../styles/Main.scss';
import axios from 'axios';
import Header from '../Components/Header/Header.js';
import Footer from '../Components/Footer/Footer.js';
import Card from '../Components/Cards/Card.js';
const authToken = localStorage.getItem('userAuthToken');

function Main (){
    const [ login, setLogin ] = useState(false)
    const [ name, setName ] = useState('')
    const [ profile, setProfile ] = useState(null)

    const getProfile=()=>{
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
            <div className="main">
                <Card />
            </div>:
            <div className="mainNoAuth">
                <h2>Welcome to MediNotes, please Login to view your personal Notes and Calendar. 
                    If you're new to our site you may participate in a short quiz for 
                    suggestions of medical practitioners for your personal health concerns.
                </h2>
                <Link to="/quiz" className="link">
                    <div className="card-nav2">
                        <h2 className="card-nav2-title">Quiz</h2>
                        <div className="card-nav-image2"></div>
                    </div>
                </Link>
            </div>
            }
            <Footer />
            </>
        )
}

export default Main;