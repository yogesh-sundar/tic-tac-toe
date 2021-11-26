import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Icons from "./Components/Icons";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";


const itemArray = new Array(9).fill("empty");

function App() {
  
  const [message, setMessage] = useState("");
  const [isCross, setIsCross] = useState(false);
  const winner = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      setMessage("Draw");
    } else if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setMessage(`${itemArray[1]} Wins`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setMessage(`${itemArray[2]} Wins`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setMessage(`${itemArray[3]} Wins`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setMessage(`${itemArray[6]} Wins`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setMessage(`${itemArray[2]} Wins`);
    }
  };

  const changeItem = (itemNumber) => {
    if (message) {
      return toast(message, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "Cross" : "Circle";
      setIsCross(!isCross);
    } else {
      return toast("Already Filled", { type: "error" });
    }
    winner();
  };

  const reload = () => {
    setIsCross(false);
    setMessage("");
    itemArray.fill("empty", 0, 9);
  };

  return (
    <div className="wrapper">
      <ToastContainer position="top-right" width="200px"/>
      <h1>TIC TAC TOE GAME</h1>
      {message ? (
        <div>
          <h2>{message}</h2>
          <button color="primary" block onClick={reload}>
            Restart
          </button>
        </div>
      ) : (
        <h1>{isCross ? "Cross" : "Circle"} turns</h1>
      )}
      <div className="grid">
        {itemArray.map((item, index) => (
          <Card className="card" onClick={() => {
            changeItem(index)
          }}>
            <CardBody className="box">
              <Icons itemIcons={item} />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
