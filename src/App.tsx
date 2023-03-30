import Button from "./components/button";
import Checkbox from "./components/checkbox";
import FormField from "./components/form-field";
import Header from "./components/header";
import Modal from "./components/modal";
import Paginacija from "./components/paginacija";
import Tags from "./components/tags";
import "./styles/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="container__item">
          <h1>BUTTON</h1>
          <Button />
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
      </div>
    </div>
  );
};

export default App;
