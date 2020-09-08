import React, {Component} from "react";
import '../../styles/Login.scss';

class Login extends Component{
    render(){
        return(
            <>
            <div className="log-box">
            <h2 className="log-title">Please Login</h2>
                <div className="log-box2">
                    <label className="log-label">Email</label>
                    <input type="text" name="email" placeholder="Email..."></input>
                    <label className="log-label">Password</label>
                    <input type="text" name="password" placeholder="Password..."></input>
                </div>
                <div className="log-box3">
                    <button type="submit" name="login" className="log-button">Login</button>
                    <button type="submit" name="logout" className="log-button">Logout</button>
                </div>
            </div>
            </>
        )
    }
}



export default Login;