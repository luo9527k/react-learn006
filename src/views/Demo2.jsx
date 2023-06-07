import React, { useState } from 'react';
import { Button } from 'antd';

const Demo = (props) => {
  //获取父组件参数
  let { x, y } = props,
    total = 0;
  for (let i = x; i <= y; i++) {
    //进行惰性化处理
    total = +String(Math.random()).substring(2);
  }

  const [num, setNum] = useState(total);
  const handle = () => {
    setNum(num + 1000);
  };
  return (
    <>
      <div>{num}</div>
      <Button type="primary" onClick={handle}>
        累加
      </Button>
    </>
  );
};

export default Demo;
