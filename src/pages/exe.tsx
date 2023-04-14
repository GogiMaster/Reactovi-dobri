import Button from "../components/button";
import Card from "../components/card";
import Checkbox from "../components/checkbox";
import FlexExe from "../components/flexExe";
import FormField from "../components/form-field";
import Input from "../components/input";
import IconEdit from "../assets/IconEdit";
import Img from "../assets/img";
import Modal from "../components/modal";
import Paginacija from "../components/paginacija";
import PremierCard from "../components/premier-card";
import Tags from "../components/tags";
import TransformExe from "../components/transformExe";

const Exe = () => {
  return (
    <>
      <div className="container">
        <div className="container__item">
          <h1>Input</h1>
          <Input />
          <Input validation="bobobo" />
          <Input rounded />
          <hr />
          <h1>BUTTON</h1>
          <Button animate={true} value="KLIK" />
          <Button animate={true} icon={<IconEdit />} color="red" />
        </div>
        <hr />
        <div className="container__item">
          <h1>CHECKBOX</h1>
          <Checkbox />
        </div>
        <hr />
        <div className="container__item">
          <h1>FORM FIELD</h1>
          <FormField />
        </div>
        <hr />
        <div className="container__item">
          <h1>PAGINACIJA</h1>
          <Paginacija />
        </div>
        <hr />
        <div className="container__item">
          <h1>TAGS</h1>
          <Tags />
        </div>
        <hr />
        <div className="container__item">
          <h1>MODAL</h1>
          <Modal />
          <hr />
        </div>
        <div className="container__item">
          <h1>TRANSFORM</h1>
          <TransformExe />
          <hr />
        </div>
        <div className="container__item">
          <h1>FLEX</h1>
          <FlexExe />
          <hr />
        </div>
        <div className="container__item">
          <h1>CARD</h1>
          <div className="cards__container">
            <Card
              title="POGLAVLJE"
              desc="fafafaaaaaaaaa sas  a fa fas af ahuioahuifahuahwu ihaiu h"
              img={<Img />}
            />
            <Card title="ODLOMAK" desc="Ja nisam nitko i nista" img={<Img />} />
            <Card title="NASLOV" img={<Img />} />
            <Card title="NASLOVCI" img={<Img />} />
          </div>
          <hr />

          <div className="grid__container">
            <PremierCard
              titleDesc="Premier League"
              points={1000}
              enter={1452}
            />
            <PremierCard
              points={999}
              title="GAME 19"
              titleDesc="Bundesleague"
            />
            <PremierCard />
            <PremierCard />
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Exe;
