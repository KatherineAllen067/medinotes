import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Main from "./Pages/Main.js";
import CalendarPage from "./Pages/Calendar.js";
import Quiz from "./Components/Quiz/Quiz.js";
import Notes from "./Pages/Notes.js";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
// import NoAuth from "./Components/NoAuthMain/NoAuthMain.js";
// import Auth from "./Components/MainAuth/MainAuth.js";

function App() {

  //react router three ways to render component for a route 
  return (
  <>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/notes" component={Notes}/>
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/calendar" component={CalendarPage}/>
    </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;
