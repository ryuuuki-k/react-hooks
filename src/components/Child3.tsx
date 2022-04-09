import { VFC, useContext } from 'react';
import { UserName } from '../App';

const Child3: VFC = () => {
  const { name, setName } = useContext(UserName);
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
