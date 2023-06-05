import { useEffect, useState } from "react";

const Game = () => {
  const [finish, setFinish] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");

  const handleKeyPress = (event: any) => {
    if (event.code === "Space") {
      movePlayer("playerOne");
    } else if (event.code === "ArrowRight") {
      movePlayer("playerTwo");
    }
  };

  const movePlayer = (id: string) => {
    const player = document.querySelector(`#${id}`) as HTMLElement;
    let position = parseInt(player.style.left);

    let newPos = position + 10;
    player.style.left = newPos + "px";

    if (player.style.left === 1200 + "px") {
      player.style.left = 1200 + "px";
      setFinish(true);
      setWinner(id === "playerOne" ? "Player One" : "Player Two");
    }

    if (player.style.left >= 1150 + "px") {
      player.style.zIndex = "0";
    } else {
      player.style.zIndex = "1";
    }
  };

  const handleReset = () => {
    setWinner("");
    setFinish(false);
    const playerOne = document.querySelector(`#playerOne`) as HTMLElement;
    const playerTwo = document.querySelector(`#playerTwo`) as HTMLElement;
    playerOne.style.left = 20 + "px";
    playerTwo.style.left = 20 + "px";
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, true);
  }, []);
  return (
    <div className="container" onKeyDown={(event) => handleKeyPress(event)}>
      {finish ? (
        <div className="overlay">
          <div className="game__modal">
            <h1>Pobjedio je {winner}</h1>
            <button className="btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="games">
        <div className="game">
          <h1>Player One</h1>
          <img
            style={{ left: 20 }}
            className="game__img"
            id="playerOne"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0q4cValGMitHHagQb-dkdLZOj_kBvPjwPBCB9jeh&s"
          />
          <img
            className="game__grass"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5yAYVV3CJkZnZ2gM8Ex0QI2UWKBKrc6AHA&usqp=CAU"
            alt=""
          />
          <img
            className="game__finish"
            src="https://t4.ftcdn.net/jpg/00/68/85/87/360_F_68858757_mml0uyN2FrZdnGjzFdWsv6KC9jPO6Ani.jpg"
            alt=""
          />
        </div>
        <div className="game">
          <h1>Player Two</h1>
          <img
            style={{ left: 20 }}
            className="game__img"
            id="playerTwo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApb_IV5Z8fKeqpA8PPV4FUgdOvLkLX5JFkTn3OKBm&s"
          />
          <img
            className="game__grass"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5yAYVV3CJkZnZ2gM8Ex0QI2UWKBKrc6AHA&usqp=CAU"
            alt=""
          />
          <img
            className="game__finish"
            src="https://t4.ftcdn.net/jpg/00/68/85/87/360_F_68858757_mml0uyN2FrZdnGjzFdWsv6KC9jPO6Ani.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
