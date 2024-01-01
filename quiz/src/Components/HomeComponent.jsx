import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  
  const handleClearLocalStorage = () => {
    localStorage.removeItem("totalCorrectAnswers");
    localStorage.removeItem("totalWrongAnswers");
    localStorage.removeItem("totalAttemptedQuestions");
  };

  return (
    <div className="App">
      <h3 className="homeText">Quiz App</h3>
      <Link to="/Quiz">
        <button onClick={handleClearLocalStorage} className="btn">
          Play
        </button>
      </Link>
    </div>
  );
}

export default Home;



