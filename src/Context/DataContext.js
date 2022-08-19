import { createContext, useContext, useState } from "react";
import { answerButton, stickman } from "../Assets";
const DataContext= createContext();
export const useData = () => useContext(DataContext);


export const DataProvider = ({children})=>{
    const [firstValue, setFirstValue]=useState(null);
    const [secondValue, setSecondValue]=useState(null);
    const [operator, setOperator] = useState(null);
    const [fakeAnswerOne, setFakeAnswerOne] = useState(null);
    const [fakeAnswerTwo, setFakeAnswerTwo] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [answers,setAnswers] =useState(Array(10).fill("")); // for results screen
    const [randomAnswer,setRandomAnswers] =useState(Array(3).fill(""));
    // const [randomAnswer1, setRandomAnswer1] = useState(null);
    // const [randomAnswer2, setRandomAnswer2] = useState(null);
    // const [randomAnswer3, setRandomAnswer3] = useState(null);
    // const [randomAnswer3, setRandomAnswer3] = useState(null);
    const [turn, setTurn] = useState(1);

    function randomArrayShuffle(array,toplam) {
        setCorrectAnswer(toplam);
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        setRandomAnswers(array);
        return array;
      }

    return (
        <DataContext.Provider
          value={{
            setFirstValue,
            setSecondValue,
            firstValue,
            secondValue,
            answerButton,
            stickman,
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
            // randomAnswer1,
            // randomAnswer2,
            // randomAnswer3,
            // setRandomAnswer1,
            // setRandomAnswer2,
            // setRandomAnswer3,
            setTurn,
            turn,
            randomArrayShuffle
          }}
        >
          {children}
        </DataContext.Provider>
    );
};