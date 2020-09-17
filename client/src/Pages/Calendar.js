import React from "react";
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import "../styles/Calendar.scss";
import Back from "../styles/assets/icons/back-icon.png";

//https://www.npmjs.com/package/react-calendar calendat info page npm


function CalendarPage(){
    let history = useHistory();

	function goBack(){
		history.push("/home")
	}
 
        return(
            <div className="calendar">
                <div className="calendar__top">
                    <img src={Back}
                    alt="arrow back"
                    className="icon-back__quiz"
                    onClick={goBack} />
                </div>
                <div className="calendar__box">
                    <Calendar className="cal-style"
                    defaultView="month"
                    />
                </div>
            </div>
        )
}

export default CalendarPage;