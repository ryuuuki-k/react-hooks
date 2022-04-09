import React, {
  createContext,
  useState,
  VFC,
  ReactNode,
} from 'react';

type Props = {
  children: ReactNode;
};

export const ContextVal = createContext(
  {} as { name: string; setName: React.Dispatch<React.SetStateAction<string>> }
);

const Name: VFC<Props> = ({ children }) => {
  const [name, setName] = useState('hoge');

  const value = {
    name,
    setName,
  };
  return (
    <div>
      <ContextVal.Provider value={value}>{children}</ContextVal.Provider>
    </div>
  );
};

export default Name;
