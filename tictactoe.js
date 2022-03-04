const container = document.getElementById("container");
const card = document.getElementsByClassName("card");

const Gameboard = (() => {
  const board = Array(9).fill("");

  const display = () => {
    for (let i = 0; i < card.length; i++) {
      card[i].textContent = board[i];
    }
    return board;
  };

  // const fillX = (index) => {
  //   board[index] = "X";
  // };

  // const fillO = (index) => {
  //   board[index] = "O";
  // };

  const fill = (index, symbol) => {
    board[index] = symbol;
  };

  return {
    display,
    fill,
  };
})();

const Player = (name, symbol) => {
  const mark = (index, symbol) => {
    Game.play(index, symbol);
  };

  return {
    mark,
  };
};

const Game = (() => {
  const play = (index, symbol) => {
    checkValidity(index, symbol);
    Gameboard.fill(index, symbol);
    Gameboard.display();
  };

  const checkValidity = (index, symbol) => {
    return true;
  };

  return {
    play,
  };
})();

Gameboard.fill(3, "X");
Gameboard.fill(5, "O");
Gameboard.display();
