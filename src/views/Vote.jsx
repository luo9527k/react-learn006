import React, { useState } from 'react';
import { Button } from 'antd';

const Vote = () => {
  const [supNum, setSupNum] = useState(0),
    [oppNum, setOppNum] = useState(0);

  let total = supNum + oppNum;
  let min = '0';
  if (total > 0) {
    ((total / supNum) * 100).toFixed(2) + '%';
    return total;
  }
  return (
    <>
      <p>支持人数：{supNum}</p>
      <p>反对人数：{oppNum}</p>
      <div>比率：{min}</div>
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
