import React, {Component} from "react";
import Calendar from 'react-calendar';
import "../styles/Calendar.scss";


//https://www.npmjs.com/package/react-calendar calendat info page npm


class CalendarPage extends Component{
    // state={
    //     value:Date.now(),
    // }

    // onChange = value =>{
    //     this.setState({ value });
    // }

    render(){

        return(
            <>
            <h1 className="calTitle">Calendar</h1>
            <div className="calBox">
                <Calendar className="cal-style"
                defaultView="month"
                />
            </div>
            </>
        )
    }
}

export default CalendarPage;