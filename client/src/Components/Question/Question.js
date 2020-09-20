import React from "react";
import { uuid } from 'uuidv4';

function Question(props){
	return(
		<div className="suggest__question" key={uuid()}>
		<label className="suggest__question--label">
			{props.question}
		</label>
		<div className="suggest__question--check">
			<input
			type="checkbox"
			className="suggest__checkbox"
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