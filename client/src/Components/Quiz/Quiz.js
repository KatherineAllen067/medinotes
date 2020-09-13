import React, { useState }from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Delete from '../../styles/assets/icons/delete-icon.png';
import Send from '../../styles/assets/icons/send-icon.png';
import Back from '../../styles/assets/icons/back-icon.png';
import '../../styles/Quiz.scss';

function Quiz (){
	const [ questions, setQuestions ] = useState([]);
	const [ answers, setAnswers ] = useState({});
	let history = useHistory();

	function goBack(){
		history.push("/")
	}

	const getQuiz=(e)=>{
		e.preventDefault();
		axios.get('http://localhost:8080/quiz')
		.then(res=>{
			res.data.find(a=>{
				if(a.id === questions){
					return setAnswers({
						practitioner: a.practitioner,
						description: a.description
					})
				}
			})
				console.log(answers)
				console.log(questions)
		})
		.catch(err=>{console.log('error with get quiz', err)});
		// e.form.reset();
	}
//if there are questions loop through the ids and get the id from the backend to show answer
//also need to check that each answer has been picked before submit
//take values and map through match the values to the array and pull the values into an answer column 
//need to make a get request to backend and get id matching the input value
        return(
            <>
			<Header />
			<div className="quiz__container">
            <div className="quiz">
			<img src={Back} 
			alt="arrow back" 
			className="icon-back__quiz"
			onClick={goBack} />
            <h1 className="quizTitle">Quiz</h1>
                <form onSubmit={getQuiz} >
				<div className="quiz__question">
					<label
					className="quiz__question--label"
					>Do you have Concerns about any Skin Conditions?
					</label>
					<div className="quiz__question--radio">
                        <span className="answer">Yes</span>
						<input
						type="radio"
						className="quiz__question--radio-btn"
						name="question1"
						value="125"
						onChange={e=>setQuestions([...questions, e.target.value])}
						// checked={setAnswers === true}
						></input>
						<span className="answer">No</span>
						<input
						type="radio"
						className="question1"
						name="question1"
						value="0"
						></input>
                    </div> 
				</div>
				<div className="quiz__question">
                    <label
					className="quiz__question--label">
						Do you have Concerns about Muscules and Joints?</label>
					<div className="quiz__question--radio">
                        <span className="answer">Yes</span>
						<input
						type="radio"
						className="question1"
						name="question2"
						value="525"
						onChange={e=>setQuestions([...questions, e.target.value])}
						></input>
						<span className="answer">No</span>
						<input
						type="radio"
						className="question1"
						name="question2"
						value="0"
						></input>
                    </div> 
				</div>
				<div className="quiz__question">
                    <label
					className="quiz__question--label">
						Do you have Concerns about your Gastrointestinal system?</label>
					<div className="quiz__question--radio">
                        <span className="answer">Yes</span>
						<input
						type="radio"
						className="question1"
						name="question3"
						value="225"
						onChange={e=>setQuestions([...questions, e.target.value])}
						></input>
						<span className="answer">No</span>
						<input
						type="radio"
						className="question1"
						name="question3"
						value="0"
						></input>
                    </div>
				</div>
				<div className="quiz__question">
                    <label 
					className="quiz__question--label">
					Do you have Concerns about your well-being?</label>
					<div className="quiz__question--radio">
                        <span className="answer">Yes</span>
						<input
						type="radio"
						className="question1"
						name="question4"
						value="325"
						onChange={e=>setQuestions([...questions, e.target.value])}
						></input>
						<span className="answer">No</span>
						<input
						type="radio"
						className="question1"
						name="question4"
						value="0"
						></input>
                    </div>
				</div>
				<div className="quiz__question">
                    <label
					className="quiz__question--label">
					Do you have Concerns about family planning?</label>
					<div className="quiz__question--radio">
                        <span className="answer">Yes</span>
						<input
						type="radio"
						className="question1"
						name="question5"
						value="425"
						onChange={e=>setQuestions([...questions, e.target.value])}
						></input>
						<span className="answer">No</span>
						<input
						type="radio"
						className="question1"
						name="question5"
						value="0"
						></input>
                    </div>
				</div>
					<div className="quiz__bottom">
						<button 
						type="submit" 
						className="quiz-btn"
						>
							<img src={Send}
							alt="send icon"
							className="send-icon"
							/>
						</button>
						<button 
						onClick={goBack}
						className="quiz-btn"
						>
							<img src={Delete}
							alt="delete icon"
							className="delete-icon"
							/>
						</button>
					</div>
                </form>
            </div>
			<div className="quiz__results">
			</div>
			</div>
			<Footer />
            </>
        )
}


export default Quiz;