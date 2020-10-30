import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Footer.scss';
// import NotePad from '../../styles/assets/icons/notes-icon.png';
import Logo from '../Logo/Logo.js';

function Footer (){
        return(
            <div className="footer">
                <Logo />
                <Link to="/aboutus" className="footer__link">
                    <h3>About Us</h3>
                </Link>
            </div>
        );
}

export default Footer;