import { VFC, useState, useCallback } from 'react';
import './App.css';
import Child from './Components/Child';

const App: VFC = () => {
  const [num, setNum] = useState(0);
  const increment = () => setNum((curVal) => curVal + 1);
  const useCB = useCallback(increment, []);
  return (
    <div className="App">
      <header className="App-header">
        <h3>memo Practice🧝🏻</h3>
        <p>{num}</p>
        <Child incrementUseCB={useCB} />
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
