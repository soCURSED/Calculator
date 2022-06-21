import "./App.css";
import Button from "./Components/Button.js";
import Result from "./Components/Result";
import { useState } from "react";

function App() {
  const [res, setRes] = useState("");
  let num1 = 0;
  let num2 = 0;

  const onChange1 = (e) => {
    num1 = e.target.value;
  };
  const onChange2 = (e) => {
    num2 = e.target.value;
  };

  return (
    <div className="App">
      <h1 className="text-center">Calculator</h1>
      <div className="inputs">
        <input type="text" onChange={onChange1} className="form-control m-2" />
        <input type="text" onChange={onChange2} className="form-control m-2" />
      </div>
      <div className="buttons">
        <Button opSymbol="*" onClick={() => setRes(num1 * num2)} />
        <Button opSymbol="+" onClick={() => setRes(num1 + num2)} />
        <Button opSymbol="-" onClick={() => setRes(num1 - num2)} />
        <Button opSymbol="/" onClick={() => setRes(num1 / num2)} />
        <Button opSymbol="%" onClick={() => setRes(num1 % num2)} />
      </div>
      <h3 className="text-center bg-light mt-3 p-2">{res}</h3>
    </div>
  );
}

export default App;
