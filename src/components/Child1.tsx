import { VFC } from 'react';
import Child2 from './Child2';

const Child1: VFC = () => {
  return (
    <div>
      <p>Child1</p>
      <Child2 />
    </div>
  );
};

export default Child1;
