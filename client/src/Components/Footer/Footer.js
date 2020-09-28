import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Footer.scss';
import NotePad from '../../styles/assets/icons/notes-icon.png';

function Footer (){
        return(
            <div className="footer">
                <h3 className="footer-title">
                    MediNotes
                <img src={NotePad} alt="pencil" className="footer-icon"/>
                </h3>
                <Link to="/aboutus">
                    <h3>About Us</h3>
                </Link>
            </div>
        )
}

export default Footer;