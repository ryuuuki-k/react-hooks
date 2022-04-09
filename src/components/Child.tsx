import { VFC } from 'react';
import { Action } from '../type';

type Props = {
  state: { count: number };
  dispatch: React.Dispatch<Action>;
};

const Child: VFC<Props> = ({ state, dispatch }) => {
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>
        -
      </button>
    </div>
  );
};

export default Child;
