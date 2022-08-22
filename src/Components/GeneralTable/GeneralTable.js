import { useEffect } from "react";
import { useData } from "../../Context/DataContext";


const GeneralTable=()=> {

  const {result,setResult} = useData();
 
    useEffect(() => {
      const getResultState = async () => await JSON.parse(localStorage.getItem('resultState'));
      getResultState().then(resultState => {
         if (resultState) {
           
            setResult(resultState.result);
         }
      });
   }, []);
  return (
    <div>
      <p>Puan: {result.Points}</p>
      <p>Çözülen Sayısı: {result.CorrectUnits + result.WrongUnits}</p>
      <p>Yanlıs Cevap:{result.WrongUnits }</p>
      <p>Dogru Cevap:{result.CorrectUnits}</p>
    </div>
  );
}

export default GeneralTable;
