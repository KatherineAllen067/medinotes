import React from "react";


function Result({ practitioner, practitioner2, description, description2 }){
    return(
    <div className="result__list">
        <div className="result__list__item">
            <h4>{practitioner}</h4>
            <span>{description}</span>
        </div>
        <div className="result__list__item">
            <h4>{practitioner2}</h4>
            <span>{description2}</span>
        </div>
    </div>
    );
}

export default Result;