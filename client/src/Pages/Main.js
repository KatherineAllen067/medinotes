import React, {Component} from "react";
import '../styles/Main.scss';
import Login from '../Components/Login/Login.js';
import Card from '../Components/Cards/Card.js';

class Main extends Component{
    render(){
        return(
            <>
            <div className="main">
                <Login />
                <Card />
            </div>
            </>
        )
    }
}



export default Main;