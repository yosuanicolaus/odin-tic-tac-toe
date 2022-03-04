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

  const fill = (index, symbol) => {
    board[index] = symbol;
  };

  return {
    display,
    fill,
  };
})();

const Player = (name, symbol) => {
  const mark = (index) => {
    Game.play(index, symbol);
  };

  return {
    mark,
  };
};

const Game = (() => {
  let _turn = 0;
  const play = (index, symbol) => {
    if (!checkValidity(index)) return;
    _turn++;
    Gameboard.fill(index, symbol);
    Gameboard.display();
  };

  const checkValidity = (index) => {
    return Gameboard.display()[index] === "";
  };

  const playTurn = (index) => {
    if (_turn % 2 === 0) {
      playerX.mark(index);
    } else {
      playerO.mark(index);
    }
  };

  return {
    play,
    playTurn,
  };
})();

const playerX = Player("Jeff", "X");
const playerO = Player("Bob", "O");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => {
    Game.playTurn(i);
  });
}
