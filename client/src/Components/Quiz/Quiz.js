import React, { useEffect, useState }from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Send from '../../styles/assets/icons/send-icon.png';
import Back from '../../styles/assets/icons/back-icon.png';
import '../../styles/Quiz.scss';
import { uuid } from 'uuidv4';

function Quiz (){
	const [ questions, setQuestions ] = useState([]);
	const [ answer, setAnswer ]= useState({});
	const[ active, setActive ] = useState(false);
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
		// console.log(answer[id]);
		if( answer[id] === undefined ){
			let answerIds= {...answer};
			let newAnswer = questions.find(concern=> concern.id === id)
			answerIds[id] = newAnswer;
			setAnswer(answerIds)
			console.log(answerIds)
			console.log(answer)
		}else{
			var answerIds= {...answer}
			delete answerIds[id]
			setAnswer(answerIds)
			console.log(answerIds)
		}
	}



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
			<div className="quiz__results">
				{Object.values(answer).map(a=>
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
			onChange={()=>
				props.clickHandler(props.id)
			}
			></input>
		</div> 
	</div>
	)
}


export default Quiz;