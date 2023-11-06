import { useState } from 'react';

import './ThirdGame.scss'

const ThirdGamePage = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // горизонтальные
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // вертикальные
      [0, 4, 8], [2, 4, 6] // диагональные
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every((cell) => cell !== null)) {
      return 'draw';
    }

    return null;
  };

  const handleCellClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    setBoard(updatedBoard);

    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextPlayer);

    const gameWinner = checkWinner();
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const renderCell = (index) => {
    return (
      <div className="cell" onClick={() => handleCellClick(index)}>
        {board[index]}
      </div>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="game">
      <div className="board">
        {board.map((cell, index) => renderCell(index))}
      </div>
      {winner && (
        <div className="message">
          {winner === 'draw' ? 'Ничья!' : `Победитель: ${winner}`}
        </div>
      )}
      <button onClick={resetGame}>Начать заново</button>
    </div>
  );
};

export default ThirdGamePage;