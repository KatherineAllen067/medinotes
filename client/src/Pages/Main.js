import React, { useState }  from "react";
import '../styles/Main.scss';
import axios from 'axios';

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