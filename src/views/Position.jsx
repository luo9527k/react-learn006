import React, { useState } from 'react';
//该函数可以使函数同步执行
import { flushSync } from 'react-dom';
import { Button } from 'antd';

const Position = () => {
  console.log('render渲染');
  const [x, setX] = useState(10),
    [y, setY] = useState(20),
    [z, setZ] = useState(30);

  const Btn = () => {
    // setTimeout(() => {
    //   setX(x + 10);
    //   setY(y + 10);
    // }, 2000);

    flushSync(() => {
      setX(x + 10);
      setY(y + 10);
    });
    setZ(z + 10);
  };
  return (
    <>
      <div>x:{x}</div>
      <div>y:{y}</div>
      <div>z:{z}</div>

      <Button type="primary" onClick={Btn}>
        异步
      </Button>
    </>
  );
};

export default Position;
