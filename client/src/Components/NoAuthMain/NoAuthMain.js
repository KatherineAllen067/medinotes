import React from 'react';
import '../../styles/Main.scss';

function NoAuthMain(){

    return(
    <div className="mainNoAuth">
        <span className="mainNoAuth__welcome">
            Welcome to MediNotes, please Login to view your personal Notes and Suggestions Form.
        </span>
    </div>
    )
}

export default NoAuthMain;