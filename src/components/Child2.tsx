import { VFC, useContext } from 'react';
import Child3 from './Child3';
import { ContextVal } from '../Contexts/Name';

const Child2: VFC = () => {
  const { name } = useContext(ContextVal);
  return (
    <div>
      <p>{name} in Child2</p>
      <Child3 />
    </div>
  );
};

export default Child2;
