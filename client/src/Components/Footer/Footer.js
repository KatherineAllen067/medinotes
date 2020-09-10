import React from "react";
import '../../styles/Footer.scss';
import NotePad from '../../styles/assets/icons/notes-icon.png';

function Footer (){
        return(
            <>
            <div className="footer">
            <h3 className="footer-title">
                MediNotes
            <img src={NotePad} alt="pencil" className="footer-icon"/>
            </h3>
            </div>
            </>
        )
}

export default Footer;