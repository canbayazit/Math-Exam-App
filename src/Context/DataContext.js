import { createContext, useContext, useEffect, useState } from "react";
import { answerButton, stickman,sadStickman ,happyStickman} from "../Assets";
const DataContext= createContext();
export const useData = () => useContext(DataContext);


export const DataProvider = ({children})=>{
    const [firstValue, setFirstValue]=useState(null);
    const [secondValue, setSecondValue]=useState(null);
    const [operator, setOperator] = useState(null);
    const [operation, setOperation] = useState("");
    const [fakeAnswerOne, setFakeAnswerOne] = useState(null);
    const [fakeAnswerTwo, setFakeAnswerTwo] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null); // for Correct answer
    const [answers,setAnswers] =useState(Array(10).fill("")); // for results screen
    const [randomAnswer,setRandomAnswers] =useState(Array(3).fill("")); // random answers in array
    const [color, setColor] = useState("white");
    const [index, setIndex] = useState(null);
    const [result, setResult] = useState({     
        Turn:1,
        Points:0,
        CorrectUnits:0,
        WrongUnits: 0 
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
            fakeAnswerOne,
            fakeAnswerTwo,
            correctAnswer,
            setFakeAnswerOne,
            setFakeAnswerTwo,
            setCorrectAnswer,
            setAnswers,
            answers,
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
     
          }}
        >
          {children}
        </DataContext.Provider>
    );
};