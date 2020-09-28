import React from "react";
import '../../styles/Aboutus.scss';
import Sass from '../../styles/assets/icons/icons8-sass-48.png';
import JS from '../../styles/assets/icons/icons8-javascript-48.png';
import Node from '../../styles/assets/icons/icons8-nodejs-48.png';
import RIcon from '../../styles/assets/icons/icons8-react-native-48.png';
import Flag from '../../styles/assets/icons/icons8-canada-48.png';

function Aboutus(){
    return(
        <div className="bio">
        <div className="bio__left">
            <h1 className="bio__name">Katherine Allen</h1>
            <span className="bio__title">Web Developer</span>
            <span className="bio__duration">Duration 10 Days</span>
            <div className="bio__headshot"></div>
        </div>
        <div>
            <h2>Technologies Used</h2>
            <img src={Sass} alt="sass icon" />
            <img src={JS} alt="javascript icon" />
            <img src={Node} alt="nodejs icon" />
            <img src={RIcon} alt="react icon" />
            <h2>Addtional Resources</h2>
            <span>Canadian Institute for Health Information 
                <img src={Flag} alt="canadian flag" />
            </span>
        </div>
        <div className="bio__contact">
            <span className="bio__contact--linkedin">www.linkedin.com/in/katherine-allen067</span>
            <span className="bio__contact--github">https://github.com/katherineallen067</span>
        </div>
        </div>
    );
}

export default Aboutus;