import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { answerButton, stickman } from "../../Assets";
import { useData } from "../../Context/DataContext";
import "./scss/styles.scss";

const QuestionPage = () => {
  const {
    firstValue,
    secondValue,
    setFirstValue,
    setSecondValue,
    randomAnswer,
    turn,
    setTurn,
    randomArrayShuffle,    
    correctAnswer
  } = useData();

  const handleResult = () => {
    setTurn((turn) => turn + 1);
  };

  const handleCorrect1=(randomAnswer)=> {
    correctAnswer===randomAnswer ? document.body.style.backgroundColor = "#00bf63" : document.body.style.backgroundColor ="#2d2d2d";
    
  }

  const handleCorrect2=(randomAnswer)=> {
    correctAnswer===randomAnswer ? document.body.style.backgroundColor = "#00bf63" : document.body.style.backgroundColor ="#2d2d2d"
  }

  const handleCorrect3=(randomAnswer)=> {
    correctAnswer===randomAnswer ? document.body.style.backgroundColor = "#00bf63" : document.body.style.backgroundColor ="#2d2d2d"
  }
  
  useEffect(() => {
    let firstValue = Math.floor(Math.random() * 100);
    let secondValue = Math.floor(Math.random() * 100);
    setFirstValue(firstValue);
    setSecondValue(secondValue);
    let toplam = firstValue + secondValue;
    let array = [toplam, toplam - 1, toplam + 1];
    randomArrayShuffle(array,toplam);
    console.log(randomAnswer);
    console.log("question page");
  }, [turn]);

  return (
    <div className="container questions-container">
      <div className="stats">
        <ul>
          <li>Puan: 120</li>
          <li>Tur: {turn}</li>
          <li>Soru: 7</li>
        </ul>
      </div>
      <div className="stickman-container">
        <div className="stickman">
          {stickman(`${firstValue}+${secondValue}`)}
        </div>
        <div className="answers">
          <button className="btn answer-btn" onClick={() => handleResult()}>
            <Link className="btn large-btn" to={turn === 10 ? "/results" : "#"} onClick={() => handleCorrect1(randomAnswer[0])}>
              {answerButton(randomAnswer[0])}
            </Link>
          </button>

          <button className="btn answer-btn" onClick={() => handleResult()}>
            <Link className="btn large-btn" to={turn === 10 ? "/results" : "#"} onClick={() => handleCorrect2(randomAnswer[1])}>
              {answerButton(randomAnswer[1])}
            </Link>
          </button>

          <button className="btn answer-btn" onClick={() => handleResult()}>
            <Link className="btn large-btn" to={turn === 10 ? "/results" : "#"} onClick={() => handleCorrect3(randomAnswer[2])}>
              {answerButton(randomAnswer[2])}
            </Link>
          </button>

          {/* <button className="btn answer-btn">
            {answerButton(fakeAnswerOne)}
          </button>
          <button className="btn answer-btn">
            {answerButton(fakeAnswerTwo)}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
