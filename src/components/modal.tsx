import Reacr, { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="page">
        <button className="modal__btn" onClick={toggleModal}>
          Open modal
        </button>
        {modal ? (
          <div className="modal">
            <div className="modal__overlay" onClick={toggleModal}></div>
            <div className="modal__content">
              <h2>Title</h2>
              <p>Message</p>
              <button className="modal__close" onClick={toggleModal}>
                close
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Modal;
