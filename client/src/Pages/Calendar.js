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
		history.push("/")
	}
 
        return(
            <>
            <Header />
            <div className="calendar">
                <div className="calendar__top">
                    <img src={Back}
                    alt="arrow back"
                    className="icon__2"
                    onClick={goBack} />
                    <h1 className="calendar__header">Your Calendar</h1>
                </div>
                <div className="calendar__box">
                    <Calendar className="cal-style"
                    defaultView="month"
                    />
                </div>
            </div>
            <Footer />
            </>
        )
}

export default CalendarPage;