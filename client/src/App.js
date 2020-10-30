import React, {useState} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './styles/App.scss';
import "./styles/Main.scss";
import axios from 'axios';
import Quiz from "./Pages/Quiz.js";
import About from "./Components/Aboutus/Aboutus.js";
import Notes from "./Pages/Notes.js";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import NoAuth from "./Components/NoAuthMain/NoAuthMain.js";
import Auth from "./Components/MainAuth/MainAuth.js";

const authToken = () =>localStorage.getItem('userAuthToken') 

function App() {
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

  return (
  <>
  <BrowserRouter>
    <Header 
      profile={profile}
      setProfile={setProfile}
      name={name}
      setName={setName}
      login={login}
      setLogin={setLogin}
      fetchProfile={getProfile}
    />
    <Switch>
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/notes" component={Notes}/> 
      <Route exact path="/aboutus" component={About}/>      
      <Route exact path="/home">
        <Auth />
      </Route>
      <Route path="/">
        { login === true ? <Redirect to="/home" /> : <NoAuth /> }
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
  </>
  );
}

export default App;
