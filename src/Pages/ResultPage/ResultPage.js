import { useEffect } from "react";
import { Link } from "react-router-dom";
import { resultHeading, returnButton, problemsHeading } from "../../Assets";
import { useData } from "../../Context/DataContext";

import "./scss/styles.scss";

const ResultPage = () => {

  const {
    scores,
    result,
    setScores
  } = useData();

useEffect(() => {
  localStorage.setItem('resultState', JSON.stringify({result }));
  document.body.style.backgroundColor = '#2d2d2d';
  }, []);

const handleClick = ()=>{
  setScores({ 
    FirstNumber: [],
    SecondNumber: [],
    SelectedAnswers: [],
    Icons:[],
    Operation: "",
    Points: 0,        
    Question: 1,
    CorrectUnits: 0,
    WrongUnits: 0 });
}
  return (
    <section className="container result-container">
      <div className="stats-container">
        {resultHeading}
        <p>Puan: {scores.Points}</p>
        <p>Dogru Cevap: {scores.CorrectUnits}</p>
        <p>Yanlıs Cevap: {scores.WrongUnits}</p>
        <button className="btn large-btn">
          <Link className="btn large-btn" to="/" onClick={()=>handleClick()}>
            {returnButton}
          </Link>
        </button>
      </div>
      <div className="problem-heading">
       <span className="underLine"> {problemsHeading}   </span>     
        {        
          scores.FirstNumber.map((item,index) => {
           
              const secondNumber = scores.SecondNumber[index];
              const selectedAnswers = scores.SelectedAnswers[index];              
              const icons = scores.Icons[index];
              console.log(icons);
              return <li>{`${item} ${scores.Operation} ${secondNumber} = ${selectedAnswers}`}&nbsp; &nbsp; &nbsp;<span>{icons}</span> </li>
                 
          })
        }        
      </div>
    </section>
  );
};

export default ResultPage;
