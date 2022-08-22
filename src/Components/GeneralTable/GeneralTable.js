import { useEffect } from "react";
import { useData } from "../../Context/DataContext";


const GeneralTable=()=> {

  const {result,setResult} = useData();

 
    useEffect(() => {
      const getGameState = async () => await JSON.parse(localStorage.getItem('gameState'));
      getGameState().then(gameState => {
         if (gameState) {
           
            setResult(gameState.result);
         }
      });
   }, []);
  return (
    <div>
      <p>Puan: {result.Points}</p>
      <p>Çözülen Sayısı: {result.CorrectUnits+result.WrongUnits=== NaN ? 0 : result.CorrectUnits+result.WrongUnits }</p>
      <p>Yanlıs Cevap:{result.WrongUnits }</p>
      <p>Dogru Cevap:{result.CorrectUnits}</p>
    </div>
  );
}

export default GeneralTable;
