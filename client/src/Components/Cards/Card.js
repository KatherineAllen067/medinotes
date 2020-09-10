import React, {Component} from "react";
import ReactDOM, { Link } from 'react-router-dom';
import '../../styles/Card.scss';


class Card extends Component{
    render(){
        return(
            <>
            <div className="card">
                <Link to="/notes" className="link">
                    <div className="card-nav1">
                        <h2 className="card-nav-title">Notes</h2>
                        <div className="card-nav-image1"></div>
                    </div>
                </Link>
                <Link to="/calendar" className="link">
                    <div className="card-nav3">
                        <h2 className="card-nav-title">Calendar</h2>
                        <div className="card-nav-image3"></div>
                    </div>
                </Link>
            </div>
            </>
        )
    }
}



export default Card;