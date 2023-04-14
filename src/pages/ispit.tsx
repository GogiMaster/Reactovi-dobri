import { useState } from "react";

const Ispit = () => {
  const [rotate, useRotate] = useState(false);
  const toggle = () => {
    useRotate(!rotate);
  };
  return (
    <>
      <div className="container">
        <div className="block__container">
          <div
            onClick={toggle}
            className={`block block__first ${rotate ? "block__rotate" : ""}`}
          >
            C
          </div>
          <div
            onClick={toggle}
            className={`block block__second ${rotate ? "block__rotate" : ""}`}
          >
            S
          </div>
          <div
            className={`block block__third ${rotate ? "block__rotate" : ""}`}
          >
            S
          </div>
        </div>
      </div>
    </>
  );
};

export default Ispit;
