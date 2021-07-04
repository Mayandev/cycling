import * as React from 'react';
import usePositions from '../../hooks/usePositions';

const CurrentPosition = () => {
  const { positions } = usePositions();
  const currentPostion = positions[positions.length - 1];
  return (
    <>
      <h3>当前位置</h3>
      <div>{currentPostion.address}</div>
    </>
  );
};

export default CurrentPosition;
