import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Main from "./Pages/Main.js";
import CalendarPage from "./Pages/Calendar.js";
import Quiz from "./Components/Quiz/Quiz.js";
import Notes from "./Pages/Notes.js";
// import NoAuth from "./Components/NoAuthMain/NoAuthMain.js";
// import Auth from "./Components/MainAuth/MainAuth.js";

function App() {
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
