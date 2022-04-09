import { VFC, useContext } from 'react';
import { ContextVal } from '../Contexts/Name';

const Child3: VFC = () => {
  const { name, setName } = useContext(ContextVal);
  return (
    <div>
      <div>{name} in Child3</div>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
    </div>
  );
};

export default Child3;
