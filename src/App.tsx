import React, { VFC, useState, ReactHTML, ReactHTMLElement } from 'react';
import './App.css';

import { User } from './type';
import Child from './components/Child';

const App: VFC = () => {
  console.log('App Components Rendering!!');
  const [user, setUser] = useState<User>({ userName: '', pass: '' });

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>useState Practice🧝🏻</h3>
        <p>name: {user.userName}</p>
        <p>password: {user.pass}</p>
        <Child setUser={setUser} />
        <a
          className='App-link'
          href='https://github.com/ryuuuki-k/react-hooks'
          target='_blank'
          rel='noopener noreferrer'
        >
          Repository Link
        </a>
      </header>
    </div>
  );
};

export default App;
