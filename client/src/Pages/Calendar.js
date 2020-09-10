import React from "react";
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import Header from '../Components/Header/Header.js';
import Footer from '../Components/Footer/Footer.js';
import "../styles/Calendar.scss";
import Back from "../styles/assets/icons/back-icon.png";


//https://www.npmjs.com/package/react-calendar calendat info page npm


function CalendarPage(){
    let history = useHistory();

	function goBack(){
		history.push("/home")
	}
 
        return(
            <>
            <Header />
            <img src={Back}
             alt="arrow back"
              className="icon-back"
              onClick={goBack} />
            <h1 className="calTitle">Calendar</h1>
            <div className="calBox">
                <Calendar className="cal-style"
                defaultView="month"
                />
            </div>
            <Footer />
            </>
        )
}

export default CalendarPage;