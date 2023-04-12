import { useState } from "react";
import premier from "../assets/Images/Premiers.jpg";

type InputProps = {
  points?: number;
  enter?: number;
  title?: string;
  titleDesc?: string;
};

const PremierCard = ({
  points,
  enter,
  title = "GAMEWEEK 17",
  titleDesc,
}: InputProps) => {
  const [toggle, setToggle] = useState(false);

  const toggleSwitch = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="grid">
        <div className="grid__header">
          <img src={premier} className="grid__jpg" />
          <div className="grid__header__text">
            <h1>{title}</h1>
            <h2>{titleDesc}</h2>
          </div>
        </div>
        <div className="grid__main">
          <div className="grid__main__text">
            <h2>Winning prize</h2>
            <h1>Singed BVB Jersey</h1>
          </div>
          <img
            src="https://source.unsplash.com/random/50x50/?phone"
            className="grid__img"
          />
        </div>
        <hr />
        <div className="grid__fotter">
          <div className="grid__fotter__col">
            <h4>Game Points</h4>
            <h3>{points}</h3>
          </div>
          <div className="grid__fotter__col">
            <h4>Game Enteries</h4>
            <h3>{enter}</h3>
          </div>
          <div className="grid__fotter__col">
            <h4>Reminder</h4>

            <span
              onClick={toggleSwitch}
              className={`grid__toggle ${toggle ? "active" : ""}`}
            >
              <div className="grid__toggle__green"></div>
              <div className="grid__toggle__circle"></div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremierCard;
