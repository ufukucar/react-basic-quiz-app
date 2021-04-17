import React from "react";
import { useContext, useState } from "react";
import { QuizContext } from "../helpers/Context";
import { quiz } from "../helpers/quiz";

export default function Quiz() {
  const { asama, setAsama, score, setScore } = useContext(QuizContext);

  const [soruAsama, setSoruAsama] = useState(0);

  const [secilenCevap, setSecilenCevap] = useState("");

  const sonrakiSoru = () => {
    if (secilenCevap === quiz[soruAsama].dogruCevap) {
      setScore(score + 1);
    }

    if (soruAsama + 1 > quiz.length - 1) {
      setAsama(2);
    } else {
      setSoruAsama(soruAsama + 1);
    }
  };

  return (
    <div className="quiz__div">
      <h2>Sorular</h2>

      <p className="soru">{quiz[soruAsama].soru}</p>
      <div className="cevaplar">
        <button onClick={() => setSecilenCevap("cevap1")}>
          {quiz[soruAsama].cevap1}
        </button>
        <button onClick={() => setSecilenCevap("cevap2")}>
          {quiz[soruAsama].cevap2}
        </button>
        <button onClick={() => setSecilenCevap("cevap3")}>
          {quiz[soruAsama].cevap3}
        </button>
        <button onClick={() => setSecilenCevap("cevap4")}>
          {quiz[soruAsama].cevap4}
        </button>
      </div>

      <button onClick={sonrakiSoru} className="sonrakiSoru">
        Sonraki soru
      </button>

      {quiz.map((item, index) => {
        console.log(item);
      })}
    </div>
  );
}
