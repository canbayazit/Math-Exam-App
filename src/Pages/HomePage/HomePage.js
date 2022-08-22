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
    setOperator,
    operator,
    setOperation,
    setResult,
    result,
    operation
  } = useData();


  useEffect(() => {
    if (operator === "Toplama") {     
      setOperation("+");     
     }
    else if (operator === "Çıkarma") {
      setOperation("-");
      
    } else if (operator === "Çarpma") {
      setOperation("x");
      
    } else if (operator === "Bölme") {
      setOperation("÷");     
    }
  }, [operator]);

const handleClick=()=>{
  operator === null && alert("Lütfen dört işlemden birini seçiniz!");
  const GeneralResult = { ...result }; 
  GeneralResult.Turn+=1;
  setResult(()=>GeneralResult)
}
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
        onClick={()=>handleClick()}
        className="btn btn-start"
        to={operator !== null ? "/questions" : "#"}      >
        {startButon}
      </Link>
    </div>
  );
};

export default HomePage;
