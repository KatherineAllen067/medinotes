import React, {Component} from "react";
import { Link } from 'react-router-dom';
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
                <Link to="/quiz" className="link">
                    <div className="card-nav2">
                        <h2 className="card-nav-title">Get Suggestions</h2>
                        <div className="card-nav-image2"></div>
                    </div>
                </Link>
            </div>
            </>
        )
    }
}



export default Card;