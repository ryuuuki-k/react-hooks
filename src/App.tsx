import { VFC, createContext, useState } from 'react';
import './App.css';
import Name from './Contexts/Name';
import Child1 from './components/Child1';

export const UserName = createContext(
  {} as { name: string; setName: React.Dispatch<React.SetStateAction<string>> }
);

const App: VFC = () => {
  const [name, setName] = useState('hoge');
  const value = {
    name,
    setName,
  };
  return (
    <UserName.Provider value={value}>
      <div className="App">
        <header className="App-header">
          <h3>useContext Practice🧝🏻</h3>
          <Name>
            <Child1 />
          </Name>
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
    </UserName.Provider>
  );
};

export default App;
