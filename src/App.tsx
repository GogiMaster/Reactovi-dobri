import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Form from "./components/form";
import Header from "./components/header";
import Modal from "./components/modal";
import Navigation from "./components/navigation";
import Paginacija from "./components/paginacija";
import Tags from "./components/tags";
import "./styles/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <table className="lego">
        <Navigation />
      </table>
      <Button />
      <Checkbox />
      <Form />
      <Paginacija />
      <Tags />
      <Modal />
    </div>
  );
};

export default App;
