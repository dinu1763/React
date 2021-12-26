import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const changeCounter = (value) => {
    setCount(count+value)
  }
  const doubleCount = (value) => {
    setCount(count*value)
  }
  return (
    <div className="App">
     <h1>Counter:{count}</h1>
     <button onClick={() => changeCounter(1)}>Increment</button>
     <button onClick={() => changeCounter(-1)}>Decrement</button>
     <button onClick={() => doubleCount(2)}>Double the Count</button>
    </div>
  );
}

export default App;
