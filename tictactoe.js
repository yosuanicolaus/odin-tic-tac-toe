const Gameboard = (() => {
  const board = Array(9).fill("-");

  const displayBoard = () => {
    return board;
  };

  const fillX = (index) => {
    board[index] = "X";
  };

  const fillO = (index) => {
    board[index] = "O";
  };

  return {
    displayBoard,
    fillX,
    fillO,
  };
})();

console.log(Gameboard.displayBoard());

console.log(Gameboard.fillX(4));

console.log(Gameboard.displayBoard());
