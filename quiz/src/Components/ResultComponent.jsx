import React from "react";
import quizData from "../resources/quizQuestion.json";
import { Link } from "react-router-dom";

const Result = () => {


  const totalQuestions = quizData.length;
  const correctAnswers = parseInt(localStorage.getItem("totalCorrectAnswers")) || 0;
  const wrongAnswers = parseInt(localStorage.getItem("totalWrongAnswers")) || 0;
  const attemptedQuestions = parseInt(localStorage.getItem("totalAttemptedQuestions")) || 0;

  

  return (
    <div className="ResultPage">
      <h2>Result</h2>
      <div className="Page">
        <h3>You need more practice!</h3>
        <h1>Your Score is {((correctAnswers / totalQuestions) * 100).toFixed(0)}%</h1>
        <div className="flex around">
          <div>
            <h4>Total number of questions</h4>
            <h4>Numbers of attempted questions</h4>
            <h4>Numbers of correct answers</h4>
            <h4>Number of wrong answers</h4>  
          </div>
          <div>
            <p>{totalQuestions}</p>
            <p>{attemptedQuestions}</p>
            <p>{correctAnswers}</p>
            <p>{wrongAnswers}</p>
          </div>
        </div>
      </div>
      <div className="flex btnClick" style={{marginTop:"30px"}}>
        <Link to="/Quiz">
           <button style={{margin:"0 20px"}}id="blueBorder">Play Again</button>
        </Link>
        <Link to="/">
            <button id="greenBorder">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};


export default Result;
