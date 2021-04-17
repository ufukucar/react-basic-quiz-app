import React from "react";
import "../App.css";
import { useContext, useState } from "react";
import { QuizContext } from "../helpers/Context";

export default function Main() {
  const { asama, setAsama } = useContext(QuizContext);

  const quizBaslat = () => {
    setAsama(1);
  };

  return (
    <div className="main__div">
      <h1>Yeni Bir Quiz e Hoş Geldiniz</h1>
      <button onClick={quizBaslat}>Başlamak için tıklayınız</button>
    </div>
  );
}
