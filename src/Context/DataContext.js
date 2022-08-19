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
    const [randomAnswer,setRandomAnswers] =useState([correctAnswer,fakeAnswerOne,fakeAnswerTwo]); // for random answers
    const [randomAnswer1, setRandomAnswer1] = useState(null);
    const [randomAnswer2, setRandomAnswer2] = useState(null);
    const [randomAnswer3, setRandomAnswer3] = useState(null);
    const [turn, setTurn] = useState(1);
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
            randomAnswer,
            setRandomAnswers,
            randomAnswer1,
            randomAnswer2,
            randomAnswer3,
            setRandomAnswer1,
            setRandomAnswer2,
            setRandomAnswer3,
            setTurn,
            turn
          }}
        >
          {children}
        </DataContext.Provider>
    );
};