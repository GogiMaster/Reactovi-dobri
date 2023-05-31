import Buton from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";
import { frontendRazred } from "./vjezba2804";

const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
const Bootstrap = () => {
  const [alert, setAlert] = useState<boolean>(true);
  const toggleAlert = () => {
    setAlert(!alert);
  };

  function handleKeyPress(e: any) {
    let key = e.code;
    const playerOne = document.querySelector("#playerOne") as HTMLElement;
    let position = 60;
    let currentPos = position + "px";
    if (key == "Space") {
      console.log("pressed");
      position++;
      playerOne.style.left = currentPos;
    }
  }

  return (
    <div
      onKeyPress={(e) => handleKeyPress(e)}
      tabIndex={0}
      className="container"
    >
      <div className="flexbox__spaceBetween">
        <h1>Bootstrap Hello</h1>
        <Buton onClick={toggleAlert}> Tipka </Buton>
      </div>

      <div>
        {" "}
        {alert ? (
          <div>
            <div className="alert">
              {["primary", "secondary", "success"].map((variant) => (
                <Alert key={variant} variant={variant}>
                  This is a {variant} alert—check it out!
                </Alert>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Dashboard">
          <div className="grid">
            <div>
              <div className="flexbox__spaceBetween">
                <div>
                  <h1>45</h1>
                </div>
                <div>
                  <h3>Ovo je neki text</h3>
                  <h4>koji nešto objašnjava</h4>
                </div>
              </div>
              <ProgressBar now={60} />
            </div>
            <div>
              <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </div>
          </div>
          <div>
            {frontendRazred.map((item) => {
              return (
                <Table
                  key={item.lastName}
                  striped
                  bordered
                  hover
                  variant="white"
                >
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.name}</td>

                      <td>{item.lastName}</td>
                      <td>{item.gender}</td>
                    </tr>
                  </tbody>
                </Table>
              );
            })}
          </div>
        </Tab>

        <Tab eventKey="game" title="Game">
          <div className="game">
            <div className="game">
              <h1>Player One</h1>
              <img
                className="game__img"
                id="playerOne"
                src="data:image/jpeg;base64,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"
              />
              <img
                className="game__grass"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5yAYVV3CJkZnZ2gM8Ex0QI2UWKBKrc6AHA&usqp=CAU"
                alt=""
              />
              <img
                className="game__finish"
                src="https://www.clipartmax.com/png/small/30-307803_flag-banner-clipart-finish-line-flag-clip-art.png"
                alt=""
              />
            </div>
            <div className="game">
              <h1>Player Two</h1>
              <img
                className="game__img"
                id="2"
                src="data:image/jpeg;base64,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"
              />
              <img
                className="game__grass"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5yAYVV3CJkZnZ2gM8Ex0QI2UWKBKrc6AHA&usqp=CAU"
                alt=""
              />
              <img
                className="game__finish"
                src="https://www.clipartmax.com/png/small/30-307803_flag-banner-clipart-finish-line-flag-clip-art.png"
                alt=""
              />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Bootstrap;
