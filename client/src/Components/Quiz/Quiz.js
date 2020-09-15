import React, { useEffect, useState }from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Send from '../../styles/assets/icons/send-icon.png';
import Back from '../../styles/assets/icons/back-icon.png';
import '../../styles/Quiz.scss';
import { uuid } from 'uuidv4';

function Quiz (){
	const [ questions, setQuestions ] = useState([]);
	const [ answer, setAnswer ]= useState([]);
	const [ checkedIds, setCheckedIds ] = useState([]); 

	let history = useHistory();

	function goBack(){
		history.push("/")
	}
	
	useEffect(()=>{
		axios.get('http://localhost:8080/quiz')
		.then(res=>{
			console.log(res.data)
			setQuestions(res.data)		
		})
		.catch(err=>{
			console.log('there is an error with quiz get', err)
		})
	}, [])
	
	const getChecked=(id)=>{
		// const checks=[...checkedIds]
		// if (checks ===!id ) {
		// 	checks.push(...checkedIds, id) 
		// }
		// else(checks.includes(id)){
		// 	for (var i =0; i < checks.length; i++){
		// 		if (checks[i] === id){
		// 			checks.splice(i, 1);
		// 		}
		// 	}
		// }
		// console.log(checks)
	}

	return(
			<>
			<div className="quiz__container">
			<div className="quiz__nav">
				<img src={Back} 
				alt="arrow back" 
				className="icon-back__quiz"
				onClick={goBack} />
			</div>
			<div className="quiz__result_quiz"> 
				<div className="quiz">
					<h1 className="quizTitle">Choose a Health Concern to see Suggestions</h1>
					<form> 
						{ questions.map(q=>
						<div className="quiz__question" key={uuid()}>
							<label className="quiz__question--label">
								{q.question}
							</label>
							<div className="quiz__question--check">
								<input
								type="checkbox"
								className="quiz__question--check-btn"
								name="concern"
								value={q.id}
								// checked={ checkedIds.includes(q.id) }
								// onChange={ ()=>getChecked(q.id)}
								></input>
							</div> 
						</div>
						)}
						<button type="submit">
							<img src={Send} alt="page with plus sign" className="icon__2"/>
						</button>
					</form>
				</div>
				<div className="quiz__results">
				</div>
			</div>
			</div>
            </>
        )
}


export default Quiz;