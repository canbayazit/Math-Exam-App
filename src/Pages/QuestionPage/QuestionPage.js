/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { answerButton, stickman,sadStickman ,happyStickman,tickIcon,falseIcon } from "../../Assets";
import { useData } from "../../Context/DataContext";
import "./scss/styles.scss";
import "../../styles/variables.scss";
const QuestionPage = () => { 
  
  const {
    firstValue,
    secondValue,  
    randomAnswer,    
    operator,  
    correctAnswer, 
    setScores,
    scores,
    index,   
    randomNumbersSum,
    operation,
    result ,
    setResult,
    randomNumbersSub,
    randomNumbersMul,
    randomNumbersDiv
  } = useData();
  
  const [previousAnswer, setPreviousAnswer] = useState({});
  const [A, setA] = useState("white");
  const [B, setB] = useState("white");
  const [C, setC] = useState("white");
  const [stickmanFace, setStickman] = useState(null);  
  const [isCorrect, setIscorrect] = useState("");
  


  const handleResult = (randomAnswer,randomAnswer2,randomAnswer3,value,index) => {
   
    // cevabın doğruluğuna göre stickman kontrolü
    if (isCorrect==="") {
      correctAnswer===randomAnswer 
      ? setStickman(happyStickman(`${firstValue} ${operation} ${secondValue}`)) 
      :setStickman(sadStickman(`${firstValue} ${operation} ${secondValue}`))
      
        // işaretledikten sonra önceki soruların cevaplarını setleme
      value === 0 ?
    setPreviousAnswer({...previousAnswer,first:randomAnswer, second:randomAnswer2,third:randomAnswer3})
    :
   ( value === 1 ?

     setPreviousAnswer({...previousAnswer,first:randomAnswer2, second:randomAnswer,third:randomAnswer3}) 
     :
     setPreviousAnswer({...previousAnswer,first:randomAnswer2, second:randomAnswer3,third:randomAnswer})
      
     )

     // cevabın doğruluğuna göre renk kontrolü
  
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
        setB("black");
        index ===0 ? setA("#00bf63") : (index === 2 ? setC("#00bf63") : null)
      }
      else if (correctAnswer!==randomAnswer && value===2 ){
        setC("black");
        index ===0 ? setA("#00bf63") : (index === 1 ? setB("#00bf63") : null)
      }
        
       // cevabın doğruluğuna göre score hesaplamaları
      
        const allScores = { ...scores }; 
        const GeneralResult = { ...result }; 
        allScores.Question += 1;
        allScores['FirstNumber'].push(firstValue);
        allScores['SecondNumber'].push(secondValue);
        allScores['SelectedAnswers'].push(randomAnswer);
        allScores.Operation= operation;
        
        if (correctAnswer===randomAnswer) {
          if (operator === "Toplama") {
            GeneralResult.Points+= 2;
            allScores.Points += 2;
          }
          if (operator === "Çıkarma") {
            GeneralResult.Points+= 3;
            allScores.Points += 3;
          }
          if (operator === "Çarpma") {
            GeneralResult.Points+= 4;
            allScores.Points += 4;
          }
          if (operator === "Bölme") {
            GeneralResult.Points+= 5;
            allScores.Points += 5;
          }
          allScores['Icons'].push(tickIcon);
          GeneralResult.CorrectUnits+= 1;
          allScores.CorrectUnits += 1;
          setScores(() => allScores);    
          setResult(() => GeneralResult);       
          setIscorrect(() => "correct");         
          document.body.style.backgroundColor ="#00bf63";
          
        } else {
          allScores['Icons'].push(falseIcon);
          GeneralResult.WrongUnits+= 1;
          allScores.WrongUnits += 1; 
          setScores(() => allScores);
          setIscorrect(() => "wrong");   
          setResult(() => GeneralResult);      
          document.body.style.backgroundColor ="#fa0000";
        
        }
    }    
  };



useEffect(() => {
        
  if (isCorrect === "wrong"||isCorrect === "correct" ) {
    setTimeout(() => {
      setIscorrect(() => "");
      setA("white");
      setC("white");
      setB("white");
      document.body.style.backgroundColor = '#2d2d2d';
      if (operation==="+") {
        randomNumbersSum();
      } else if(operation==="-"){
        randomNumbersSub();
      }
      else if (operation==="x"){
        randomNumbersMul();
      }
      else if (operation==="÷"){
        randomNumbersDiv();
      }
    }, 1000);
  }
  
}, [isCorrect])

  
  useEffect(() => {  
     
    if (operation==="+") {
      randomNumbersSum();
    } else if(operation==="-"){
      randomNumbersSub();
    }
    else if (operation==="x"){
      randomNumbersMul();
    }
    else if (operation==="÷"){
      randomNumbersDiv();
    }
  }, []);

  return (
    <div className="container questions-container">
      <div className="stats">
        <ul>
          <li>Puan: {scores.Points}</li>
          <li>Tur: { result.Turn}</li>
          <li>Soru: {scores.Question}</li>
        </ul>
      </div>
      <div className="stickman-container" >
        <div className="stickman" id="stickmans" >
        { isCorrect === "correct" && stickmanFace}
        { isCorrect === "wrong" && stickmanFace}
        { isCorrect === "" &&stickman(`${firstValue} ${operation} ${secondValue}`)}
        </div>
        <div className="answers">
          <button id="answerOne" className="btn answer-btn" onClick={() => handleResult(randomAnswer[0],randomAnswer[1],randomAnswer[2],0,index)}>
            <Link className="btn large-btn" to={scores.Question === 10 ? "/results" : "#"}>            
              {(isCorrect==="correct" || isCorrect==="wrong") && answerButton(previousAnswer.first, A)}
              {(isCorrect==="") && answerButton(randomAnswer[0], A)}
            </Link>
          </button>
          <button id="answerTwo" className="btn answer-btn" onClick={() => handleResult(randomAnswer[1],randomAnswer[0],randomAnswer[2],1,index)}>
            <Link className="btn large-btn" to={scores.Question === 10 ? "/results" : "#"} >
            {(isCorrect==="correct" || isCorrect==="wrong") && answerButton(previousAnswer.second, B)}
              {(isCorrect==="") && answerButton(randomAnswer[1], B)}           
            </Link>
          </button>
          <button id="answerThree" className="btn answer-btn" onClick={() => handleResult(randomAnswer[2],randomAnswer[0],randomAnswer[1],2,index)}>
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
