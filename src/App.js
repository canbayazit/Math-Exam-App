import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import QuestionPage from "./Pages/QuestionPage/QuestionPage";
import ResultPage from "./Pages/ResultPage/ResultPage";
import { DataProvider } from "./Context/DataContext";
function App() {
  return (
    <div className="App">
      <DataProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
