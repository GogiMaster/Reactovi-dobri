import { useState } from "react";
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
 
  const [modul, setModul] =useState(false)
  const toggle=()=>{
    setModul(!modul)
  }
  const ludi=[
    {title:'josko' ,desc:222}
  ]
  
  return (
    <div className="App">     
      <Header />
      <Modal />
      <Button />
      <Checkbox />
      <Form />
      <Paginacija />
      <Tags /> 
        <button onClick={toggle}>Otvori modul</button>
        {modul ? (<>
        <div>{ludi.map(item =>
          <div>{item.title}{item.desc}</div> )}</div>
        </>):''}
    </div>
  );
};

export default App;
