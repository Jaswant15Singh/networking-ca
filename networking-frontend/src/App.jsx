import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Home />

      <h1>Vite + React by </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Data is {count}</button>
        <p>
          Edited data by Jaswant Singh<code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
