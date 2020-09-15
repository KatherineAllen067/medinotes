import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Main.scss';

function NoAuthMain(){

    return(
        <div className="mainNoAuth">
        <p className="mainNoAuth__welcome">Welcome to MediNotes, please Login to view your personal Notes and Calendar. 
            If you're new to our site you and looking for suggestions about your health concerns 
            you can checkout out our Get Suggestions Page.
        </p>
        <Link to="/quiz" className="link">
            <div className="card-nav2">
                <h2 className="card-nav2-title">Get Suggestions</h2>
                <div className="card-nav-image2"></div>
            </div>
        </Link>
    </div>
    )
}

export default NoAuthMain;