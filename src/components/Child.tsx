import { VFC } from 'react';
import { User } from '../type';

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const Child: VFC<Props> = ({ setUser }) => {
  // ↓ check rendering log
  console.log('Child Components Rendering!!👨')
  const useStateCB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(currentVal => {
      return {
        ...currentVal,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <input
        placeholder='name'
        name='userName'
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          useStateCB(e);
        }}
      />
      <input
        placeholder='password'
        name='pass'
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          useStateCB(e);
        }}
      />
    </div>
  );
};

export default Child;
