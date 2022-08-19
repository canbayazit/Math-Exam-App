import { useEffect } from "react";
import { tickIcon } from "../../Assets";
import { useData } from "../../Context/DataContext";
import "./scss/styles.scss";

const OperatorButton = ({operator, setOperator, operatorText}) => {

  const handleClick = () => {
    setOperator(operatorText);
  };

  return (
    <div className="operator-container">
      <button className="btn operator" onClick={handleClick}>        
        {operatorText}
      </button>
      <p>{operator === operatorText && tickIcon}</p>
    </div>
  );
}

export default OperatorButton;
