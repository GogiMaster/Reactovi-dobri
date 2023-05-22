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
      a
      <>
        a
        <div className="cards">
          a{img}
          <div className="cards__main">
            a<h1>{title}</h1>
            <p className="cards__main__p">{desc}</p>a
          </div>
          <div className="cards__fotter">
            a
            <Button value="OK" />
            <Button color="green" value="Cancel" />a
          </div>
          sa main slike
        </div>
        a
      </>
    </div>
  );
};

export default Card;
