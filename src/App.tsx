import React, { VFC, useState, ReactHTML, ReactHTMLElement } from 'react';
import './App.css';

type User = {
  userName: string;
  pass: string;
};
const App: VFC = () => {
  const [user, setUser] = useState<User>({ userName: '', pass: '' });

  const useStateCB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((currentVal) => {
      return {
        ...currentVal,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>useState Practice🧝🏻</h3>
        <p>name: {user.userName}</p>
        <p>password: {user.pass}</p>
        <input
          placeholder="name"
          name="userName"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            useStateCB(e);
          }}
        />
        <input
          placeholder="password"
          name="pass"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            useStateCB(e);
          }}
        />
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
