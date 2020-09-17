import React from "react";
import { uuid } from 'uuidv4';

function Question(props){
	return(
		<div className="quiz__question" key={uuid()}>
		<label className="quiz__question--label">
			{props.question}
		</label>
		<div className="quiz__question--check">
			<input
			type="checkbox"
			className="quiz__checkbox"
			name="concern"
			value={props.id}
			checked={props.check}
			onChange={()=>props.clickHandler(props.id)}
			></input>
		</div> 
	</div>
	)
}

export default Question;