import { useState } from "react";

const Button = () => {
  const [modal,setModal] =useState(false);
  const toggle = () => {
    setModal(!modal);
  }
  return (
    <div className="btn">
      <button onClick={toggle} className="btn__click">Text</button>
      {modal ? (<>
      <p onClick={toggle}>maaaaaaaaaaaaaaaaaaaaaaaaaaaaasala</p>
      </>):''}
    </div>
  );
};
export default Button;
