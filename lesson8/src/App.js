import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  function resert() {
    setCounter(0);
  }
  function dicrement() {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Счетчик:{counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={resert}>Сбросить все значения</button>
        <button onClick={dicrement}>-</button>
      </header>
    </div>
  );
}

export default App;
