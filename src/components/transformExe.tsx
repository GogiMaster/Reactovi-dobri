import { useState } from "react";

const transformExe = () => {
  const [scale, useScale] = useState(false);

  const toggleScale = () => {
    useScale(!scale);
  };

  return (
    <>
      <div className="box__container">
        <div className="box__translate">
          <h4>Transform</h4>
          <div className="box box--translate"></div>
        </div>

        <div className="box__rotate">
          <h4>Rotate</h4>
          <div className="box box--rotate"></div>
        </div>

        <div className="box__scale">
          <h4>Scale</h4>
          <div className="box box--scale"></div>
        </div>

        <div className="box__skew">
          <h4>Skew</h4>
          <div className="box box--skew"></div>
        </div>

        <div className="box__chaos">
          <h4>Haos</h4>
          <div className="box box--chaos"></div>
        </div>
      </div>
      <div className="box__toggle">
        <h4>Click</h4>

        <div
          onClick={toggleScale}
          className={`box box--${scale ? "active" : "inactive"}`}
        ></div>
      </div>
    </>
  );
};

export default transformExe;
