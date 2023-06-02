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
    if (e.code === "Space") {
      movePlayer("playerOne");
    } else if (e.code === "Numpad0") {
      movePlayer("playerTwo");
    }
  }

  const movePlayer = (id: string) => {
    const player = document.querySelector(`#${id}`) as HTMLElement;
    let position = parseInt(player.style.left);

    let newPos = position + 5;
    player.style.left = newPos + "px";
  };

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
                style={{ left: 0 }}
                className="game__img"
                id="playerOne"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0q4cValGMitHHagQb-dkdLZOj_kBvPjwPBCB9jeh&s"
              />
              <img
                className="game__grass"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5yAYVV3CJkZnZ2gM8Ex0QI2UWKBKrc6AHA&usqp=CAU"
                alt=""
              />
              <img
                className="game__finish"
                src="https://t4.ftcdn.net/jpg/00/68/85/87/360_F_68858757_mml0uyN2FrZdnGjzFdWsv6KC9jPO6Ani.jpg"
                alt=""
              />
            </div>
            <div className="game">
              <h1>Player Two</h1>
              <img
                style={{ left: 0 }}
                className="game__img"
                id="playerTwo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApb_IV5Z8fKeqpA8PPV4FUgdOvLkLX5JFkTn3OKBm&s"
              />
              <img
                className="game__grass"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5yAYVV3CJkZnZ2gM8Ex0QI2UWKBKrc6AHA&usqp=CAU"
                alt=""
              />
              <img
                className="game__finish"
                src="https://t4.ftcdn.net/jpg/00/68/85/87/360_F_68858757_mml0uyN2FrZdnGjzFdWsv6KC9jPO6Ani.jpg"
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
