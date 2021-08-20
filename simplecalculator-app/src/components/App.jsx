import React, { useState } from "react";

export default function App() {
  const [input1, setInput1] = useState([]);
  const [input, setInput] = useState("");

  function handleNumber(event) {
    const value = parseInt(event.target.name);
    setInput1((preValue) => {
      return [...preValue, value];
    });
  }

  function handleSubmit(event) {
    switch (event.target.name) {
      case "+":
        setInput(input1[0] + input1[1]);
        break;
      case "-":
        setInput(input1[0] - input1[1]);
        break;
      case "*":
        setInput(input1[0] * input1[1]);
        break;
      default:
        setInput(input1[0] / input1[1]);
        break;
    }
  }

  function handleAC() {
    setInput1([]);
    setInput("");
  }

  return (
    <div className="app">
      <h1>Calculator</h1>
      <div className="display">
        <p> Output : {input}</p>
        <p>Input Value First : {input1[0]}</p>
        <p>Input Value Second : {input1[1]}</p>
      </div>
      <div>
        <form onClick={(event) => event.preventDefault()}>
          <div className="number">
            <div>
              <button name="1" onClick={handleNumber}>
                1
              </button>
              <button name="2" onClick={handleNumber}>
                2
              </button>
              <button name="3" onClick={handleNumber}>
                3
              </button>
            </div>
            <div>
              <button name="4" onClick={handleNumber}>
                4
              </button>
              <button name="5" onClick={handleNumber}>
                5
              </button>
              <button name="6" onClick={handleNumber}>
                6
              </button>
            </div>
            <div>
              <button name="7" onClick={handleNumber}>
                7
              </button>
              <button name="8" onClick={handleNumber}>
                8
              </button>
              <button name="9" onClick={handleNumber}>
                9
              </button>
            </div>
            <div>
              <button name="0" onClick={handleNumber}>
                0
              </button>
            </div>
          </div>

          <div className="main-2">
            <button name="+" onClick={handleSubmit}>
              Addition
            </button>
            <button name="-" onClick={handleSubmit}>
              Subtraction
            </button>
            <div>
              <button name="*" onClick={handleSubmit}>
                Multiply
              </button>
              <button name="/" onClick={handleSubmit}>
                Divide
              </button>
              <button name="AC" onClick={handleAC}>
                AC
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
