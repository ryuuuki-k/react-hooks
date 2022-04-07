import { VFC } from 'react';
import logo from './logo.svg';
import './App.css';

const App: VFC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <h3>React Hooks Practice🧝🏻</h3>
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
