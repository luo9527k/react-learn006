import React, { useState, useCallback } from 'react';
import VoteFooter from './VoteFooter';
import VoteMain from './VoteMain';

const Vote = () => {
  const [supNum, setSupNum] = useState(0),
    [oppNum, setOppNum] = useState(0);

  const handle = useCallback((type) => {
    if (type === 'sup') {
      setSupNum(supNum + 1);
      return;
    }
    setOppNum(oppNum + 1);
  });
  return (
    <>
      <VoteMain supNum={supNum} oppNum={oppNum} title="函数组件" />
      <VoteFooter handle={handle} />
    </>
  );
};

export default Vote;
