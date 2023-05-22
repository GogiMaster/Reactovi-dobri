import { ReactNode } from "react";
import Img from "../assets/img";
import Button from "./button";

type CardProps = {
  title?: string;
  desc?: string;
  img?: ReactNode;
};

const Card = ({
  title,
  desc = "Ja sam mali Perica i imam 20000 godina i volim jesti lubenice i olim svasta nesto",
  img,
}: CardProps) => {
  return (
    <div>
      <>
        <div className="cards">
          {img}
          <div className="cards__main">
            <h1>{title}</h1>
            <p className="cards__main__p">{desc}</p>
          </div>
          <div className="cards__fotter">
            <Button value="OK" />
            <Button color="green" value="Cancel" />
          </div>
          sa main slike
        </div>
        vyvy
      </>
    </div>
  );
};

export default Card;
