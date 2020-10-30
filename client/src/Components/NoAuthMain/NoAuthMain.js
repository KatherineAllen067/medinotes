import React from 'react';
import '../../styles/Main.scss';
import Pencil from '../../styles/assets/icons/pencil.png';

function NoAuthMain(){

    return(
    <div className="mainNoAuth">
        <div>
            <img src={Pencil} alt="cartoon pencil" className="pencil"/>
        </div>
        <h1 className="mainNoAuth__welcome">
            Welcome Please Login
        </h1>
    </div>
    )
}

export default NoAuthMain;