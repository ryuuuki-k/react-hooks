import React, { memo, useCallback, VFC } from 'react';

type Props = {
  incrementUseCB: () => void;
};

const Child: VFC<Props> = ({  incrementUseCB }) => {
  console.log('Child component!!');
  return (
    <>
      <button onClick={incrementUseCB}>+(useCB)</button>
    </>
  );
};

export default memo(Child);
