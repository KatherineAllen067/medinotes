import React, { useEffect, useState }from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Send from '../../styles/assets/icons/send-icon.png';
import Back from '../../styles/assets/icons/back-icon.png';
import '../../styles/Quiz.scss';
import { uuid } from 'uuidv4';

function Quiz (){
	const [ questions, setQuestions ] = useState([]);
	const [ answer, setAnswer ]= useState();
	//if question id set show answer if not show nothing 

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
		let newAnswer= questions.filter(concern=> concern.id === id)
		console.log(newAnswer)		
		}

		// const showAnswer=(e)=>{
		// 	e.preventDefault();
		// 	setAnswers(newAnswer)
		// }

	return(
		<div className="quiz__container"> 
			<div className="quiz__nav">
				<img src={Back} 
				alt="arrow back" 
				className="icon-back__quiz"
				onClick={goBack} />
			</div>
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
							onChange={ ()=>getChecked(q.id)}
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
				{questions.map(a=>
					<div key={uuid()}>
						<h4>{a.answers.practitioner}</h4>
						<span>{a.answers.description}</span>
						<h4>{a.answers.practitioner2}</h4>
						<span>{a.answers.description2}</span>
					</div>
				)}
			</div>
		</div>
        )
}


export default Quiz;