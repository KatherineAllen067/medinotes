import React from "react";
import '../../styles/Aboutus.scss';
import Sass from '../../styles/assets/icons/icons8-sass-48.png';
import JS from '../../styles/assets/icons/icons8-javascript-48.png';
import Node from '../../styles/assets/icons/icons8-nodejs-48.png';
import RIcon from '../../styles/assets/icons/icons8-react-native-48.png';
import Flag from '../../styles/assets/icons/icons8-canada-48.png';
import Git from '../../styles/assets/icons/github.svg';
import Linked from '../../styles/assets/icons/linkedin.svg';

function Aboutus(){
    return(
        <div className="bio">
            <div className="bio__left">
                <div className="bio__left--title">
                    <div className="bio__headshot"></div>
                    <div className="bio__left--description">
                        <h1 className="bio__name">Katherine Allen</h1>
                        <h2 className="bio__title">Web Developer</h2>
                        <span className="bio__duration">Duration 10 Days</span>
                    </div>
                </div>
            </div>
            <div className="bio__tech">
                    <h3>Built Using</h3>
                    <div className="bio__tech--icons">
                        <img src={Sass} alt="sass icon" />
                        <img src={RIcon} alt="react icon" />
                        <img src={JS} alt="javascript icon" />
                        <img src={Node} alt="nodejs icon" />
                    </div>
                        <span className="bio__tech--flag">Canadian Institute for Health Information 
                            <img src={Flag} alt="Canadian flag" />
                        </span>
                <div className="bio__contact">
                    <h3>Let's Connect</h3>
                    
                    <h4 className="bio__contact--links">
                        <img src={Linked} alt="Linked In icon" />
                        https://linkedin.com/in/katherine-allen067</h4>
                    
                    <h4 className="bio__contact--links">
                        <img src={Git} alt="GitHub icon" />
                        https://github.com/katherineallen067</h4>
                    <h4 className="bio__contact--links">
                        {/* <img src={Git} alt="GitHub icon" /> */}
                        https://katherineallenportfolio.netlify.app/</h4>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;