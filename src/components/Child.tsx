import { VFC, useEffect } from 'react';

const Child: VFC = () => {
  useEffect(() => {
    console.log('Run useEffect in Child Component!!');

    return () => {
      console.log('Child Component is Unmounted');
    };
  }, []);

  return <div></div>;
};

export default Child;
