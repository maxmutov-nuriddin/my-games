import { useState } from "react";

import './SecondGame.scss'

function SecoundGamePage() {
  const [result, setResult] = useState("");
  const gestures = ["rock", "paper", "scissors"];

  function computerPlay() {
    const randomIndex = Math.floor(Math.random() * gestures.length);
    return gestures[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Ничья!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "Вы победили!";
    } else {
      return "Компьютер победил!";
    }
  }

  const handleGestureClick = (playerSelection) => {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    setResult(result);
  };

  return (
    <div className="second d-flex flex-column">
      <h1 className="second__title text-center">Камень, ножницы, бумага</h1>
      <p className="second__text text-center">Выберите один из трех жестов:</p>
      <div className="second__box d-flex justify-content-center gap-3">
        <button className="second__box-btn button-75" onClick={() => handleGestureClick("rock")}>Камень</button>
        <button className="second__box-btn button-75" onClick={() => handleGestureClick("paper")}>Бумага</button>
        <button className="second__box-btn button-75" onClick={() => handleGestureClick("scissors")}>Ножницы</button>
      </div>
      <p className="second__result text-center mt-5">{result}</p>
    </div>
  );
}

export default SecoundGamePage;
