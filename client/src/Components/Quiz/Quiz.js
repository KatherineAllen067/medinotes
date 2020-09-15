import React, { useEffect, useState }from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Delete from '../../styles/assets/icons/delete-icon.png';
import Send from '../../styles/assets/icons/send-icon.png';
import Back from '../../styles/assets/icons/back-icon.png';
import '../../styles/Quiz.scss';
import { uuid } from 'uuidv4';

function Quiz (){
	//setting the id of the question they clicked yes to 
	const [ questions, setQuestions ] = useState([]);
	const [ result, setResult ]= useState(''); 
	const [ answers, setAnswers ] = useState([]);
	let history = useHistory();

	function goBack(){
		history.push("/")
	}
	
	useEffect(()=>{
		axios.get('http://localhost:8080/quiz')
		.then(res=>{
			console.log(res.data)
			setQuestions(res.data)
			// setAnswers([...answers, 
			// 	res.data.filter(a=> (a.s === result)
			// 		return
			// 		)
			// ])
		})
		// console.log( 'results are :', result, 'questions are: ', questions, 'answers are :', answers)
	}, [result])
	
	const getResult=(id)=>{
		setResult(id)
		console.log(result)
	}
	
	const getQuiz= (e)=>{
		//send array of question id that are answered yes
		e.preventDefault();
	}

        return(
			<>
			<Header />
			<div className="quiz__container">
			<div className="quiz__nav">
				<img src={Back} 
				alt="arrow back" 
				className="icon-back__quiz"
				onClick={goBack} />
			</div>
			<div className="quiz__result_quiz"> 
				<div className="quiz">
					<h1 className="quizTitle">Quiz</h1>
					<form onSubmit={getQuiz} >
						{ questions.map(q=>
						<div className="quiz__question" key={uuid()}>
							<label className="quiz__question--label">
							{q.question}
							</label>
							<div className="quiz__question--radio">
								<span className="answer">Yes</span>
								<input
								type="radio"
								className="quiz__question--radio-btn"
								name={q.id}
								value={q.id}
								onChange={()=>getResult(q.id)}
								></input>
								<span className="answer">No</span>
								<input
								type="radio"
								className="question1"
								name={q.id}
								value="0"
								></input>
							</div> 
						</div>
						)}
						<button type="submit" className="quiz-btn">
							<img src={Send} alt="page with arrow" className="send-icon"/>
						</button>	
						<button type="submit" className="quiz-btn" onClick={goBack}>
							<img src={Delete} alt="trash can" className="delete-icon"/>
						</button>
					</form>
				</div>
				<div className="quiz__results"></div>
			</div>
			</div>
			<Footer />
            </>
        )
}


export default Quiz;