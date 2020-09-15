import React, { useEffect, useState }from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Back from '../../styles/assets/icons/back-icon.png';
import '../../styles/Quiz.scss';
import { uuid } from 'uuidv4';

function Quiz (){
	const [ questions, setQuestions ] = useState([]);
	const [ result, setResult ]= useState(''); 
	const [ answers, setAnswers ] = useState('');
	let history = useHistory();

	function goBack(){
		history.push("/")
	}
	
	useEffect(()=>{
		axios.get('http://localhost:8080/quiz')
		.then(res=>{
			console.log(res.data)
			setQuestions(res.data)

					// practitioner1= res.data.answers.practitioner)
					// description: a.answers.description,
					// practitioner2: a.answers.practitioner2,
					// description2: a.answers.description2

			
		})
	}, [result])
	
	const getResult=(id)=>{
		
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
							<div className="quiz__question--radio">
								<input
								type="radio"
								className="quiz__question--radio-btn"
								name={q.id}
								value={q.id}
								onChange={()=>getResult(q.id)}
								></input>
							</div> 
						</div>
						)}
					</form>
				</div>
				<div className="quiz__results">
					{questions.map(a=>{
						return (
						<div>
							<span>{a.answers.practitioner}</span>
						</div>
						)
					})}
				</div>
			</div>
			</div>
            </>
        )
}


export default Quiz;