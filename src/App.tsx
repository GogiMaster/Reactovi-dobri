import Button from "./components/button";
import Checkbox from "./components/checkbox";
import FormField from "./components/form-field";
import FlexExe from "./components/flexExe";
import Header from "./components/header";
import Input from "./components/input";
import Modal from "./components/modal";
import Paginacija from "./components/paginacija";
import Tags from "./components/tags";
import TransformExe from "./components/transformExe";
import "./styles/styles.scss";
//icon
import IconEdit from "./assets/IconEdit";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="container__item">
          <h1>Input</h1>
          <Input rounded validation="jfajajaffj" />
          <Input label="first name" />
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
      </div>
    </div>
  );
};

export default App;
