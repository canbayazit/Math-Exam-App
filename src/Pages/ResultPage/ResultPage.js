import { Link } from "react-router-dom";

import { result, returnButton, problemsHeading } from "../../Assets";

import "./scss/styles.scss";

const ResultPage = () => {
  return (
    <section className="container result-container">
      <div className="stats-container">
        {result}
        <p>Puan:</p>
        <p>Dogru Cevap:</p>
        <p>Yanlıs Cevap:</p>
        <button className="btn large-btn">
          <Link className="btn large-btn" to="/">
            {returnButton}
          </Link>
        </button>
      </div>
      <div className="problem-heading">
        {problemsHeading}
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
      </div>
    </section>
  );
};

export default ResultPage;
