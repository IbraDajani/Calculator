import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const computar = () => {
    setResult(eval(result).toString());
  };

  const handleButton = (item) => {
    setResult(result.concat(item.target.name));
  };

  const limpar = () => {
    setResult("");
  };

  const apagar = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="teclado">
          <button className="operations-btn" onClick={limpar} id="clear-btn">
            Clear
          </button>
          <button className="operations-btn" onClick={apagar} id="backspace">
            C
          </button>
          <button className="operations-btn" name="/" onClick={handleButton}>
            &divide;
          </button>
          <button name="7" onClick={handleButton}>
            7
          </button>
          <button name="8" onClick={handleButton}>
            8
          </button>
          <button name="9" onClick={handleButton}>
            9
          </button>
          <button className="operations-btn" name="*" onClick={handleButton}>
            &times;
          </button>
          <button name="4" onClick={handleButton}>
            4
          </button>
          <button name="5" onClick={handleButton}>
            5
          </button>
          <button name="6" onClick={handleButton}>
            6
          </button>
          <button className="operations-btn" name="-" onClick={handleButton}>
            &ndash;
          </button>
          <button name="1" onClick={handleButton}>
            1
          </button>
          <button name="2" onClick={handleButton}>
            2
          </button>
          <button name="3" onClick={handleButton}>
            3
          </button>
          <button className="operations-btn" name="+" onClick={handleButton}>
            +
          </button>
          <button name="0" onClick={handleButton}>
            0
          </button>
          <button name="." onClick={handleButton}>
            .
          </button>
          <button className="operations-btn" onClick={computar} id="result-btn">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
