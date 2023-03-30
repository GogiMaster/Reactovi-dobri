import { useState } from "react";
import Navigation from "./navigation";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal ? (
        <>
          <div className="modal__overlay" onClick={toggleModal}></div>
          <div className="modal">
            <div className="modal__header">
              <h2>Title</h2>
            </div>
            <div className="modal__main">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, neque nisi. Ullam, excepturi dolor porro eum nobis
                consectetur vel quam dolorem consequatur vitae earum deserunt
                assumenda maxime odit corporis asperiores maiores perferendis
                quas. Rem nemo aperiam quaerat necessitatibus tenetur reiciendis
                ex, recusandae alias cumque quos unde quod magnam ea sapiente.
              </p>
              <table className="lego">
                <Navigation />
              </table>
            </div>
            <div className="modal__fotter">
              <button className="modal__btn" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <button className="modal__btn" onClick={toggleModal}>
        OPEN
      </button>
    </>
  );
};
export default Modal;
