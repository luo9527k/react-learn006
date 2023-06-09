import React, { useState } from 'react';
import { Button } from 'antd';

const Vote = () => {
  const [supNum, setSupNum] = useState(0),
    [oppNum, setOppNum] = useState(0);

  const total = supNum + oppNum;
  if(!total==0){supNum/oppNum*100.toFiex(2)}
  return (
    <>
      <p>支持人数：{supNum}</p>
      <p>反对人数：{oppNum}</p>
      <Button onClick={() => setSupNum(supNum + 1)} type="primary">
        支持
      </Button>
      <Button onClick={() => setOppNum(oppNum + 1)} type="default">
        反对
      </Button>
    </>
  );
};

export default Vote;
