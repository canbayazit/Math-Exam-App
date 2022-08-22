import { createContext, useContext, useState } from "react";
import { answerButton} from "../Assets";
const DataContext= createContext();
export const useData = () => useContext(DataContext);


export const DataProvider = ({children})=>{
    const [firstValue, setFirstValue]=useState(null);
    const [secondValue, setSecondValue]=useState(null);
    const [operator, setOperator] = useState(null);
    const [operation, setOperation] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState(null); // for Correct answer
    const [randomAnswer,setRandomAnswers] =useState(Array(3).fill("")); // random answers in array
    const [color, setColor] = useState("white");
    const [index, setIndex] = useState(null);
    const [result, setResult] = useState({     
        Turn:0,
        Points:0,
        CorrectUnits:0,
        WrongUnits: 0,
        Operation: operation
         });
         
    const [scores, setScores] = useState({ 
        FirstNumber: [],
        SecondNumber: [],
        SelectedAnswers: [],
        Icons:[],
        Operation: "",
        Points: 0,        
        Question: 1,
        CorrectUnits: 0,
        WrongUnits: 0 });    

    function randomArray(array,toplam) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        array.map((item,index)=>{
            toplam===item && setIndex(index)
        })
        setRandomAnswers(array);
      }

    function randomNumbersSum () {
        let firstValue = Math.floor(Math.random() * 100);
        let secondValue = Math.floor(Math.random() * 100);
        setFirstValue(firstValue);
        setSecondValue(secondValue);
        let toplam = firstValue + secondValue;
        let array = [toplam, toplam - 1, toplam + 1];        
        setCorrectAnswer(toplam);
        randomArray(array,toplam)       
      }

      function randomNumbersSub () {
        let firstValue = Math.floor(Math.random() * 100);
      let secondValue = Math.floor(Math.random() * 100);
     
      if (firstValue > secondValue) {
        setFirstValue(firstValue);
        setSecondValue(secondValue);
        let cıkarma = firstValue - secondValue;
        let array = [cıkarma, cıkarma - 1, cıkarma + 1]; 
        setCorrectAnswer(cıkarma);
        randomArray(array,cıkarma) 
      } else {
        setFirstValue(secondValue);
        setSecondValue(firstValue);
        let cıkarma = secondValue - firstValue;
        let array = [cıkarma, cıkarma - 1, cıkarma + 1]; 
        setCorrectAnswer(cıkarma);
        randomArray(array,cıkarma) 
      }
      }

      function randomNumbersMul () {
        let firstValue = (Math.floor(Math.random() * 10)+1);
        let secondValue = (Math.floor(Math.random() * 10)+1);
        setFirstValue(firstValue);
        setSecondValue(secondValue);
        let carpma = secondValue * firstValue;
        let array = [carpma, carpma - 1, carpma + 1];     
        setCorrectAnswer(carpma);
        randomArray(array,carpma);          
      }

      function randomNumbersDiv () {
        while (true) {
            let firstValue = Math.floor(Math.random() * (100-10  ) + 10); 
            let secondValue = (Math.floor(Math.random() * 10)+1);
            if ((firstValue%secondValue)===0) {
                setFirstValue(firstValue);
                setSecondValue(secondValue);
                let bolum = firstValue / secondValue;
                let array = [bolum, bolum - 1, bolum + 1];
                setCorrectAnswer(bolum);
                randomArray(array,bolum); 
                break
            }
        }
      }
     
    return (
        <DataContext.Provider
          value={{
            setFirstValue,
            setSecondValue,
            firstValue,
            secondValue,
            answerButton,       
            setOperator,
            operator,            
            correctAnswer,           
            setCorrectAnswer,        
            setRandomAnswers,
            randomAnswer,           
            randomArray,
            setColor,
            color,
            scores,
            setScores,
            index,
            setIndex,
            randomNumbersSum,
            operation,
            setOperation,
            result,
            setResult,
            randomNumbersSub,
            randomNumbersMul,
            randomNumbersDiv
          }}
        >
          {children}
        </DataContext.Provider>
    );
};