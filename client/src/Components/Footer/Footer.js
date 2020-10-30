import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Footer.scss';
import Logo from '../Logo/Logo.js';

function Footer (){
        return(
            <div className="footer">
                <Logo />
                <Link to="/aboutus" className="footer__link">
                    <h4>About Us</h4>
                </Link>
            </div>
        );
}

export default Footer;