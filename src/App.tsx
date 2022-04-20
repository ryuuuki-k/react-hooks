import { VFC } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './component/Child';

const App: VFC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React Hooks Form</h3>
        <Child />
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
