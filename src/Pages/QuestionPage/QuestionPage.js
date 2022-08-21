/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { answerButton, stickman,sadStickman ,happyStickman } from "../../Assets";
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
    operator,
    randomArrayShuffle,    
    correctAnswer, 
    setScores,
    scores,
    index,
    setIndex,
    randomNumbers   
  } = useData();
  
  const [previousAnswer, setPreviousAnswer] = useState({});
  const [A, setA] = useState("white");
  const [B, setB] = useState("white");
  const [C, setC] = useState("white");
  
  const [abc, setABC] = useState(null);
  const [answer, setAnswers] = useState({answers: Array(2).fill("")});
  const [isCorrect, setIscorrect] = useState("");
  // $("#stickmans").show().delay(5000);


  const handleResult = (randomAnswer,randomAnswer2,randomAnswer3,firstValue,secondValue,value,index,randomNumbers) => {
    if (isCorrect==="") {
      correctAnswer===randomAnswer 
      ? setABC(happyStickman(`${firstValue}+${secondValue}`)) 
      :setABC(sadStickman(`${firstValue}+${secondValue}`))
      correctAnswer===randomAnswer 
      ? setPreviousAnswer({...previousAnswer,first:randomAnswer, second:randomAnswer2,third:randomAnswer3}) 
      :setPreviousAnswer({...previousAnswer,first:randomAnswer, second:randomAnswer2,third:randomAnswer3})
      // correctAnswer===randomAnswer && setCondition(true)
    
      // correctAnswer===randomAnswer 
      // ? setIscorrect(() => "correct")
      // :setIscorrect(() => "wrong")
  
      if (correctAnswer===randomAnswer && value===0 ) {
        setA("Black");
        
      } else if (correctAnswer===randomAnswer && value===1 ){
        setB("Black");
      }
      else if (correctAnswer===randomAnswer && value===2 ){
        setC("Black");
      }
      else if (correctAnswer!==randomAnswer && value===0 ){
        setA("black");
        index ===1 ? setB("#00bf63") : (index === 2 ? setC("#00bf63") : null)
      }
      else if (correctAnswer!==randomAnswer && value===1 ){
        setB("Red");
        index ===0 ? setA("#00bf63") : (index === 2 ? setC("#00bf63") : null)
      }
      else if (correctAnswer!==randomAnswer && value===2 ){
        setC("Red");
        index ===0 ? setA("#00bf63") : (index === 1 ? setB("#00bf63") : null)
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
          randomNumbers();
          document.body.style.backgroundColor ="#00bf63";
          // success.play();
        } else {
   
          allScores.WrongUnits += 1; 
          setScores(() => allScores);
          setIscorrect(() => "wrong");
          randomNumbers();
          document.body.style.backgroundColor ="#fa0000";
          // failure.play();
        }
    }
    
    
      
      // gameScore.Points = scores.Points;
  };




useEffect(() => {
  if (isCorrect === "wrong"||isCorrect === "correct" ) {
    setTimeout(() => {
      setIscorrect(() => "");
      setA("white");
      setC("white");
      setB("white");
      document.body.style.backgroundColor ="#2d2d2d";
      
    }, 3000);
  }
  
}, [isCorrect])

  
  useEffect(() => {
    console.log("random numbers",randomAnswer,firstValue)
    randomNumbers();
  }, []);

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
          <button id="answerOne" className="btn answer-btn" onClick={() => handleResult(randomAnswer[0],randomAnswer[1],randomAnswer[2],firstValue,secondValue,0,index,randomNumbers)}>
            <Link className="btn large-btn" to={scores.Question === 10 ? "/results" : "#"}>            
              {(isCorrect==="correct" || isCorrect==="wrong") && answerButton(previousAnswer.first, A)}
              {(isCorrect==="") && answerButton(randomAnswer[0], A)}
            </Link>
          </button>
          <button id="answerTwo" className="btn answer-btn" onClick={() => handleResult(randomAnswer[1],randomAnswer[0],randomAnswer[2],firstValue,secondValue,1,index,randomNumbers)}>
            <Link className="btn large-btn" to={scores.Question === 10 ? "/results" : "#"} >
            {(isCorrect==="correct" || isCorrect==="wrong") && answerButton(previousAnswer.second, B)}
              {(isCorrect==="") && answerButton(randomAnswer[1], B)}           
            </Link>
          </button>
          <button id="answerThree" className="btn answer-btn" onClick={() => handleResult(randomAnswer[2],randomAnswer[0],randomAnswer[1],firstValue,secondValue,2,index,randomNumbers)}>
            <Link className="btn large-btn" to={scores.Question === 10 ? "/results" : "#"} >              
              {(isCorrect==="correct" || isCorrect==="wrong") && answerButton(previousAnswer.third, C)}
              {(isCorrect==="") && answerButton(randomAnswer[2], C)}
            </Link>
          </button>         
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
