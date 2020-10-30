import React from "react";
import { Link } from "react-router-dom";
import NotePad from '../../styles/assets/icons/notes-icon.png';

function Logo(){
    return(
        <Link to="/" className="header__link">
            <h3 className="header-title">MediNotes
                <img src={NotePad} alt="pencil" className="header-icon"/>
            </h3>
        </Link>
    );
}

export default Logo;