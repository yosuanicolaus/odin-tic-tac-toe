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
    if (_turn >= 5) checkStatus(symbol);
  };

  const checkValidity = (index) => {
    return Gameboard.display()[index] === "";
  };

  const checkStatus = (symbol) => {
    console.log("checking status");
    const board = Gameboard.display();
    let boardIndex = 0;
    // TODO: implement check for winner
    // convert 1d array to 2d array
    const newBoard = new Array(3);
    for (let i = 0; i < 3; i++) {
      newBoard[i] = [];
      for (let j = 0; j < 3; j++) {
        newBoard[i][j] = board[boardIndex++];
      }
    }
    console.table(newBoard);

    let key = new Array(3);
    function checkKey() {
      if (key[0] === key[1] && key[0] === key[2]) {
        console.log(symbol + " PLAYER WIN!!! YOOO");
      }
    }
    // check for same i
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        key[j] = newBoard[i][j];
      }
      checkKey();
    }
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
