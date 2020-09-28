import React from 'react';
import '../../styles/Main.scss';

function NoAuthMain(){

    return(
    <div className="mainNoAuth">
        <h1 className="mainNoAuth__welcome">
            Welcome to MediNotes, please Login to view your personal Notes and Suggestions Form.
        </h1>
    </div>
    )
}

export default NoAuthMain;