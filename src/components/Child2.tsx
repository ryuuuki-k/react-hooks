import { VFC, useContext } from 'react';
import Child3 from './Child3';
import { UserName } from '../App';

const Child2: VFC = () => {
  const { name } = useContext(UserName);
  return (
    <div>
      <p>{name} in Child2</p>
      <Child3 />
    </div>
  );
};

export default Child2;
