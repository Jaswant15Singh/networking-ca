import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Home />

      <h1>Networking CA by Jaswant Abhay Singh</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Data is {count}</button>
        <p>Edited data by Jaswant Abhay Singh for Networking CA.</p>
      </div>
    </>
  );
}

export default App;
