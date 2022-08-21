/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { answerButton, stickman,sadStickman ,happyStickman } from "../../Assets";
import { useData } from "../../Context/DataContext";
import "./scss/styles.scss";

const QuestionPage = () => { 
  let color = "white";
  const {
    firstValue,
    secondValue,
    setFirstValue,
    setSecondValue,
    randomAnswer,
    turn,
    operator,
    randomArrayShuffle,    
    correctAnswer, 
    setScores,
    scores,
    index,
    setIndex   
  } = useData();
  // const [c, setC] = useState(null);
  const [A, setA] = useState("white");
  const [C, setC] = useState("white");
  const [B, setB] = useState("white");
  const [abc, setABC] = useState(null);
  const [answer, setAnswers] = useState({answers: Array(2).fill("")});
  const [isCorrect, setIscorrect] = useState("");
  // $("#stickmans").show().delay(5000);


  const handleResult = (randomAnswer,firstValue,secondValue,value,index) => {
    
    correctAnswer===randomAnswer 
    ? setABC(happyStickman(`${firstValue}+${secondValue}`)) 
    :setABC(sadStickman(`${firstValue}+${secondValue}`))
   
    // correctAnswer===randomAnswer 
    // ? setIscorrect(() => "correct")
    // :setIscorrect(() => "wrong")

    if (correctAnswer===randomAnswer && value==0 ) {
      setA("Black");
      
    } else if (correctAnswer===randomAnswer && value==1 ){
      setB("Black");
    }
    else if (correctAnswer===randomAnswer && value==2 ){
      setC("Black");
    }
    else if (correctAnswer!==randomAnswer && value==0 ){
      setA("Red");
      index ===1 ? setB("Black") : (index === 2 ? setC("Black") : null)
    }
    else if (correctAnswer!==randomAnswer && value==1 ){
      setB("Red");
      index ===0 ? setA("Black") : (index === 2 ? setC("Black") : null)
    }
    else if (correctAnswer!==randomAnswer && value==2 ){
      setC("Red");
      index ===0 ? setA("Black") : (index === 1 ? setB("Black") : null)
    }
      setAnswers({...answer,answers:answer.answers})
    
      const allScores = { ...scores }; 
      allScores.Question += 1;
   
      if (correctAnswer===randomAnswer) {
        if (operator === "Toplama") {
        
          allScores.Points += 2;
        }
        if (operator === "Çıkarma") {
        
          allScores.Points += 3;
        }
        if (operator === "Çarpma") {
      
          allScores.Points += 4;
        }
        if (operator === "Bölme") {
  
          allScores.Points += 5;
        }

        allScores.CorrectUnits += 1;

        setScores((scores)=> ({...scores,}));
        setIscorrect(() => "correct");
        // success.play();
      } else {
 
        allScores.WrongUnits += 1; 
        setScores(() => allScores);
        setIscorrect(() => "wrong");
        // failure.play();
      }
      // gameScore.Points = scores.Points;
  };




useEffect(() => {
  
  let firstValue = Math.floor(Math.random() * 100);
    let secondValue = Math.floor(Math.random() * 100);
    setFirstValue(firstValue);
    setSecondValue(secondValue);
    let toplam = firstValue + secondValue;
    let array = [toplam, toplam - 1, toplam + 1];
    
    randomArrayShuffle(array,toplam); 

  setTimeout(() => {
    setIscorrect(() => "");
    setA("white");
    setC("white");
     setB("white");
  }, 3000);
}, [isCorrect])

  
  useEffect(() => {
       
    
    
    
  }, [isCorrect]);

  return (
    <div className="container questions-container">
      <div className="stats">
        <ul>
          <li>Puan: 120</li>
          <li>Tur: 0</li>
          <li>Soru: {scores.Question}</li>
        </ul>
      </div>
      <div className="stickman-container" >
        <div className="stickman" id="stickmans" >
        { isCorrect === "correct" && abc}
        { isCorrect === "wrong" &&abc}
        { isCorrect === "" &&stickman(`${firstValue}+${secondValue}`)}
        </div>
        <div className="answers">
          <button id="answerOne" className="btn answer-btn" onClick={() => handleResult(randomAnswer[0],firstValue,secondValue,0,index)}>
            <Link className="btn large-btn" to={scores.Question === 10 ? "/results" : "#"}  >
            
              {answerButton(randomAnswer[0], A)}
   
            </Link>
          </button>

          <button id="answerTwo" className="btn answer-btn" onClick={() => handleResult(randomAnswer[1],firstValue,secondValue,1,index)}>
            <Link className="btn large-btn" to={scores.Question === 10 ? "/results" : "#"} >
              {answerButton(randomAnswer[1],B)}
            </Link>
          </button>

          <button id="answerThree" className="btn answer-btn" onClick={() => handleResult(randomAnswer[2],firstValue,secondValue,2,index)}>
            <Link className="btn large-btn" to={scores.Question === 10 ? "/results" : "#"} >
              {answerButton(randomAnswer[2],C)}
              
            </Link>
          </button>

        
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
