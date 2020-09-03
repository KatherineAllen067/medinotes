import React, {Component} from "react";
import '../../styles/Header.scss';
import Pencil from '../../styles/assets/icons/output-onlinepngtools.png';

class Header extends Component{
    render(){
        return(
            <>
            <div className="header">
                <h1 className="header-title">MediNotes</h1>
                <img src={Pencil} alt="pencil" className="header-icon"/>
            </div>
            
            </>
        )
    }
}



export default Header;