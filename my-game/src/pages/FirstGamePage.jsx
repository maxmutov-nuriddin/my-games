import { useEffect, useState } from "react";

import './FirstGame.scss'

const FirstGamePage = () => {
  const [secretNumber, setSecretNumber] = useState();
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1)
  }, [])

  const checkGuess = () => {
    const guessedNumber = parseInt(guess);

    if (guessedNumber === secretNumber) {
      setMessage('Поздравляю! Вы угадали число!');
    } else if (guessedNumber > secretNumber) {
      setMessage('Загаданное число меньше');
    } else {
      setMessage('Загаданное число больше');
    }
  };

  return (
    <div className="container first">
      <h1 className="text-center first__title">Угадай число</h1>
      <div className="text-center first__box d-flex justify-content-center gap-lg-5 gap-2 align-items-center">
        <input
          className="first__input"
          type="number"
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
        />
        <button className="button-75 btns" onClick={checkGuess}>Проверить</button>
      </div>
      <p className="text-center first__result">{message}</p>
    </div>
  );
}

export default FirstGamePage