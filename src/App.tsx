import { VFC, useState, useEffect } from 'react';
import './App.css';
import Child from './components/Child';

const App: VFC = () => {
  const [val, setVal] = useState<number>(0);

  useEffect(() => {
    console.log('Run useEffect in App Component');
    return () => {console.log('App Component is Unmounted')};
  }, [val]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>useEffect Practice🧝🏻</h3>
        <p>{val}</p>
        <button
          onClick={() => {
            setVal(curVal => curVal + 1);
          }}
        >
          +1
        </button>
        <Child />
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
