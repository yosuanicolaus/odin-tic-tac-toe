const container = document.getElementById("container");
const card = document.getElementsByClassName("card");

const Gameboard = (() => {
  const board = Array(9).fill("-");

  const displayBoard = () => {
    for (let i = 0; i < card.length; i++) {
      card[i].textContent = board[i];
    }
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

Gameboard.fillO(1);
Gameboard.fillX(3);
Gameboard.fillO(5);

console.log(Gameboard.displayBoard());
