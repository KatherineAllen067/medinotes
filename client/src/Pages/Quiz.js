import React, {Component} from "react";
import '../styles/Quiz.scss';

class Quiz extends Component{
    render(){
        return(
            <>
            <h1 className="quizTitle">Quiz</h1>
            <div className="quiz">
                <form>
                <label>Do you have Concerns about any Skin Conditions?</label>
					<div className="question">
                        <span className="answer">Yes</span>
						<input
						type="radio"
						className="question1"
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
                    <label>Do you have Concerns about Muscules and Joints?</label>
					<div className="question">
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
                    <label>Do you have Concerns about your Gastrointestinal system?</label>
					<div className="question">
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
                    <label>Do you have Concerns about your well-being?</label>
					<div className="question">
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
                    <label>Do you have Concerns about family planning?</label>
					<div className="question">
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
                    <button type="submit" className="quiz-btn">See Results</button>
                    <button type="submit" className="quiz-btn2">Cancel</button>
                </form>
            </div>
            </>
        )
    }
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