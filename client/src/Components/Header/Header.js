import React, {Component} from "react";
import '../../styles/Header.scss';
import NotePad from '../../styles/assets/icons/notes-icon.png';
import Login from '../Login.js';

class Header extends Component{
    render(){
        return(
            <>
            <div className="header">
                <h1 className="header-title">MediNotes
                <img src={NotePad} alt="pencil" className="header-icon"/>
                </h1>
                <Login />
            </div>
            </>
        )
    }
}



export default Header;