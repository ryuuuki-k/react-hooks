import { VFC, useReducer } from 'react';
import './App.css';
import Child from './components/Child';
import { Action } from './type';

const initialState = {
  count: 0,
};

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
      break;
    case 'decrement':
      return { count: state.count - action.payload };
      break;
  }
};

const App: VFC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <h3>useReducer Practice🧝🏻</h3>
        <Child state={state} dispatch={dispatch} />
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
