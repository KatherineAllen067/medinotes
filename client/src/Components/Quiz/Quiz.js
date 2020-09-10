import React from "react";
import { useHistory } from "react-router-dom";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Delete from '../../styles/assets/icons/delete-icon.png';
import Send from '../../styles/assets/icons/send-icon.png';
import Back from '../../styles/assets/icons/back-icon.png';
import '../../styles/Quiz.scss';

function Quiz (){
	let history = useHistory();

	function goBack(){
		history.push("/")
	}

	const getQuiz=(e)=>{
		e.preventDefault();
	}

	//need to make a get request to backend and get id matching the input value
        return(
            <>
			<Header />
			<div className="quiz__container">
            <div className="quiz">
			<img src={Back} 
			alt="arrow back" 
			className="icon-back"
			onClick={goBack} />
            <h1 className="quizTitle">Quiz</h1>
                <form onSubmit={getQuiz}>
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
						name="question1"
						value="525"
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
						Do you have Concerns about your Gastrointestinal system?</label>
					<div className="quiz__question--radio">
                        <span className="answer">Yes</span>
						<input
						type="radio"
						className="question1"
						name="question1"
						value="225"
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
						Do you have Concerns about your well-being?</label>
					<div className="quiz__question--radio">
                        <span className="answer">Yes</span>
						<input
						type="radio"
						className="question1"
						name="question1"
						value="325"
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
						Do you have Concerns about family planning?</label>
					<div className="quiz__question--radio">
                        <span className="answer">Yes</span>
						<input
						type="radio"
						className="question1"
						name="question1"
						value="425"
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
						type="submit" 
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
//five questions yes or no about health concerns
//each answer will have a id
//the id will be associated with a type of practitioner 
//if you pick yes to a question there will be two types of practitioners give as result
//skin conditions(125)
// muscle and joint pain(525)
// gastral intestinal(225)
//well-being(325)
// growing family (425)

export default Quiz;