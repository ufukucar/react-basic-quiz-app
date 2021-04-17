import React from "react";
import { useContext, useState } from "react";
import { QuizContext } from "../helpers/Context";
import { quiz } from "../helpers/quiz";

export default function Final() {
  const { asama, setAsama, score, setScore } = useContext(QuizContext);

  const restartQuiz = () => {
    setAsama(0);
    setScore(0);
  };

  return (
    <div className="final__div">
      <h1>Tebrikler, Quiz i bitirdiniz! </h1>

      <p className="sonuc">
        {score} / {quiz.length} oranında doğru bildiniz!
      </p>

      <button className="restartGame" onClick={restartQuiz}>
        Yeniden başlamak için tıklayınız..
      </button>
    </div>
  );
}
