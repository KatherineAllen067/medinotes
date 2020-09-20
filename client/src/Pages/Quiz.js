import React, { useEffect, useState }from "react";
import { useHistory } from "react-router-dom";
import Question from "../Components/Question/Question.js";
import axios from 'axios';
import Back from '../styles/assets/icons/back-icon.png';
import '../styles/Quiz.scss';
import { uuid } from 'uuidv4';

function Quiz (){
	const [ questions, setQuestions ] = useState([]);
	const [ answer, setAnswer ]= useState({});
	let history = useHistory();

	function goBack(){
		history.push("/")
	}
	
	useEffect(()=>{
		axios.get('http://localhost:8080/quiz')
		.then(res=>{
			setQuestions(res.data)	
		})
		.catch(err=>{
			console.log('there is an error with quiz get', err)
		})
	}, [])

	const getChecked=(id)=>{
		if( answer[id] === undefined ){
			let answerIds= {...answer};
			let newAnswer = questions.find(concern=> concern.id === id)
			answerIds[id] = newAnswer;
			setAnswer(answerIds)
			
		}else{
			var answerIds= {...answer}
			delete answerIds[id]
			setAnswer(answerIds)
		}
	}

	return(
		<div className="suggest__container"> 
			<div className="quiz__nav">
				<img src={Back} 
				alt="arrow back" 
				className="icon-back__suggest"
				onClick={goBack} />
			</div>
			<div className="suggest">
				<h1 className="suggest__title">Choose a Health Concern to see Suggestions</h1>
				<form> 
				{ questions.map(q=>
				<Question
				key={uuid()}
				question={q.question}
				id={q.id}
				clickHandler={getChecked}
				check={ answer[q.id] ? true : false }
				/>
				)}
				</form>
			</div>
			<div className="suggest__results">
				{Object.values(answer).map(a=>
					<div className="result__list" key={uuid()}>
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