import React, { useEffect, useState }from "react";
import { useHistory } from "react-router-dom";
import Question from "../Components/Question/Question.js";
import Result from "../Components/Results/Results.js";
import axios from 'axios';
import Back from '../styles/assets/icons/back-icon.png';
import '../styles/Quiz.scss';
import { v4 as uuidv4 } from 'uuid';

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
			//all questions and answers are set in state
			setQuestions(res.data)	
		})
		.catch(err=>{
			console.log('there is an error with quiz get', err)
		})
	}, [])

	const getChecked=(id)=>{
		//set the answers when there is an isn't a checked box 
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
				key={uuidv4()}
				question={q.question}
				id={q.id}
				clickHandler={getChecked}
				check={ answer[q.id] ? true : false }
				/>
				)}
				</form>
			</div>
			<div className="suggest__results">
				{/* answer is an object turn the values into an array to show all the values */}
				{Object.values(answer).map(a=>
				<Result
					key={uuidv4()}
					practitioner={a.answers.practitioner}
					description={a.answers.description}
					practitioner2={a.answers.practitioner2}
					description2={a.answers.description2}
					/>
				)}
			</div>
		</div>
        )
}

export default Quiz;