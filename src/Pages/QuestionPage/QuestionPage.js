import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { answerButton, stickman } from "../../Assets";
import { useData } from "../../Context/DataContext";
import "./scss/styles.scss";

const QuestionPage = () => {
  const {
    fakeAnswerOne,
    fakeAnswerTwo,
    correctAnswer,
    firstValue,
    secondValue,
    setFirstValue,
    setSecondValue,
    setCorrectAnswer,
    setFakeAnswerOne,
    setFakeAnswerTwo,
    setAnswers,
    answers,
    randomAnswer,
    setRandomAnswers, 
    randomAnswer1,
    randomAnswer2,
    randomAnswer3,
    setRandomAnswer1,
    setRandomAnswer2,
    setRandomAnswer3,
    turn,
    setTurn
  } = useData();

  

  const newQuestion = () => {
   
    let firstNumber = Math.floor(Math.random() * 100);
    let secondNumber = Math.floor(Math.random() * 100);
    setFirstValue(firstNumber);
    setSecondValue(secondNumber);
    let toplam = firstNumber + secondNumber;
    setCorrectAnswer(toplam);
    setFakeAnswerOne(toplam - 1);
    setFakeAnswerTwo(toplam + 1);      
   
    
    setAnswers(`${firstValue}+${secondValue} = ${toplam} `);
    
  };

  const randomAnswers = ()=>{
    let randomAnswer = Math.floor(Math.random() * randomAnswer.length);   
    let randomAnswer2 = Math.floor(Math.random() * randomAnswer.length);
    let randomAnswer3 = Math.floor(Math.random() * randomAnswer.length)
    
      while (randomAnswer!==randomAnswer2 && randomAnswer3!==randomAnswer2 &&randomAnswer3!==randomAnswer) {
        randomAnswer2 = Math.floor(Math.random() * randomAnswer.length)
        randomAnswer3 = Math.floor(Math.random() * randomAnswer.length)
     } 
    
    setRandomAnswer1(randomAnswer);
    setRandomAnswer2(randomAnswer2);
    setRandomAnswer3(randomAnswer3);

  }

  const handleResult=(turn)=>{
        setTurn(turn=> turn+1);
  }

  useEffect(() => {
    let firstValue = Math.floor(Math.random() * 100);
    let secondValue = Math.floor(Math.random() * 100);
    setFirstValue(firstValue);
    setSecondValue(secondValue);
    let toplam = firstValue + secondValue;
    setCorrectAnswer(toplam);
    setFakeAnswerOne(toplam - 1);
    setFakeAnswerTwo(toplam + 1);
    console.log("question page");
  }, [turn]);

  return (
    <div className="container questions-container">
      <div className="stats">
        <ul>
          <li>Puan: 120</li>
          <li>Tur: {}</li>
          <li>Soru: 7</li>
        </ul>
      </div>
      <div className="stickman-container">
        <div className="stickman">
          {stickman(`${firstValue}+${secondValue}`)}
        </div>
        <div className="answers">
          <button className="btn answer-btn" onClick={()=>handleResult()}>
            <Link className="btn large-btn" to="/results">
              {answerButton(correctAnswer)}
            </Link>
          </button>

          <button className="btn answer-btn" onClick={()=>handleResult()}>
            <Link className="btn large-btn" to={"/results"}>
              {answerButton(fakeAnswerOne)}
            </Link>
          </button>

          <button className="btn answer-btn" onClick={()=>handleResult()}>
            <Link className="btn large-btn" to="/results">
              {answerButton(fakeAnswerTwo)}
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
