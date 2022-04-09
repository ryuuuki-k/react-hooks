import { VFC, useState, useMemo } from 'react';
import './App.css';

const App: VFC = () => {
  const [num, setNum] = useState(0);
  const [numUseMemo, setNumUseMemo] = useState(0);

  const loopAndDouble = (count: number) => {
    let i = 0;
    while (i < 1000000000) i++;
    console.log('Looped!!');
    return count * 2;
  };

  const doubledValUseMemo = useMemo(
    () => loopAndDouble(numUseMemo),
    [numUseMemo]
  );
  // const doubledValUseMemo = loopAndDouble(numUseMemo);

  return (
    <div className="App">
      <header className="App-header">
        <h3>useMemo Practice🧝🏻</h3>
        <p>{num}</p>
        <button onClick={() => setNum(num + 1)}>Increment and Loop</button>
        <p>{numUseMemo}</p>
        <p>{doubledValUseMemo}</p>
        <button onClick={() => setNumUseMemo(numUseMemo + 1)}>
          Increment and Loop useMemo
        </button>
        <a
          className="App-link"
          href="https://github.com/ryuuuki-k/react-hooks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository Link
        </a>
      </header>
    </div>
  );
};

export default App;
