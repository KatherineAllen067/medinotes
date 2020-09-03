import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Header from "./Components/Header/Header.js";
import CalendarPage from "./Pages/Calendar.js";
import Quiz from "./Pages/Quiz.js";
import Notes from "./Pages/Notes.js";
import Main from "./Pages/Main.js";

function App() {
  return (
  <>
  <BrowserRouter>
  <Header />
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/notes" component={Notes}/>
      <Route exact path="/quiz" component={Quiz}/>
      <Route exact path="/calendar" component={CalendarPage}/>
    </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;
