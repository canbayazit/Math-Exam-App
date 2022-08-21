import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { homeHeader, startButon } from "../../Assets";
import GeneralTable from "../../Components/GeneralTable/GeneralTable";
import OperatorButton from "../../Components/OperatorButton/OperatorButton";
import { useData } from "../../Context/DataContext";
import "./scss/styles.scss";

const operators = ["Toplama", "Çıkarma", "Çarpma", "Bölme"];

const HomePage = () => {

  const {
    setFirstValue,
    setOperator,
    operator,
    setSecondValue,
    fakeAnswerOne,
    fakeAnswerTwo,
    correctAnswer,
    setFakeAnswerOne,
    setFakeAnswerTwo,
    setCorrectAnswer,
    firstValue,
    secondValue,
    randomNumbers
  } = useData();

  useEffect(() => {
    if (operator === "Toplama") {
      randomNumbers();
      // let firstValue = Math.floor(Math.random() * 100);
      // let secondValue = Math.floor(Math.random() * 100);
      // setFirstValue(firstValue);
      // setSecondValue(secondValue);
      // let toplam = firstValue + secondValue;
      // setCorrectAnswer(toplam);
      // setFakeAnswerOne(toplam - 1);
      // setFakeAnswerTwo(toplam + 1);
      console.log("operator changed");
     }
    //else if (operator === "Çıkarma") {
    //   let firstValue = Math.floor(Math.random() * 100);
    //   let secondValue = Math.floor(Math.random() * 100);
    //   setFirstValue(firstValue);
    //   setSecondValue(secondValue);
    //   if (firstValue > secondValue) {
    //     let cıkarma = firstValue - secondValue;
    //     setCorrectAnswer(cıkarma);
    //     setFakeAnswerOne(cıkarma - 1);
    //     setFakeAnswerOne(cıkarma + 1);
    //   } else {
    //     let cıkarma = secondValue - firstValue;
    //     setCorrectAnswer(cıkarma);
    //     setFakeAnswerOne(cıkarma - 1);
    //     setFakeAnswerOne(cıkarma + 1);
    //   }
    // } else if (operator === "Çarpma") {
    //   let firstValue = Math.floor(Math.random() * 10);
    //   let secondValue = Math.floor(Math.random() * 10);
    //   setFirstValue(firstValue);
    //   setSecondValue(secondValue);
    //   let carpmaCorrect = secondValue * firstValue;
    //   let carpmaFakeOne = (secondValue - 1) * firstValue;
    //   let carpmaFakeTwo = secondValue * (firstValue + 1);
    //   setCorrectAnswer(carpmaCorrect);
    //   setFakeAnswerOne(carpmaFakeOne);
    //   setFakeAnswerOne(carpmaFakeTwo);
    // } else if (operator === "Bölme") {
    //   //   let firstValue=Math.floor(Math.random() * 100);
    //   // let secondValue=Math.floor(Math.random() * 10);
    // }
  }, [operator]);

  return (
    <div className="container homepage-container">
      <header>{homeHeader}</header>
      <section className="section">
        <GeneralTable />
        <div>
          {operators.map((item, index) => {
            return (
              <OperatorButton
                key={index}
                operator={operator}
                operatorText={item}
                setOperator={setOperator}
              />
            );
          })}
        </div>
      </section>

      <Link
        onClick={()=>operator === null && alert("Lütfen dört işlemden birini seçiniz!")}
        className="btn btn-start"
        to={operator !== null ? "/questions" : "#"}
      >
        {startButon}
      </Link>
    </div>
  );
};

export default HomePage;
