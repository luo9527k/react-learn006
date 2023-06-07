import React, { useState } from 'react';
//该函数可以使函数同步执行
import { flushSync } from 'react-dom';
import { Button } from 'antd';

/*
  useState 自带的性能优化机制：
    - 每一次修改状态值时，会拿取最新的修改的值和之前的状态值作比较[基于Object.is作比较]
    - 如果发现两次的值是一样的，则不会修改状态，也不会让视图更新[可以理解为PureCompoent，在sholudComponentUpdate中做了浅比较和优化]
*/

const Demo = () => {
  console.log('render渲染');
  const [x, setX] = useState(10);

  const handle = () => {
    for (let i = 0; i < 10; i++) {
      flushSync(() => {
        // setX(x + 1);
        //使用Object.is比较算法，来比较新老state
        setX(10); //与原始值相同不会进行更新
      });

      // setX((prev) => {
      //   //存储上次的值
      //   return prev + 1;
      // });
    }
  };
  return (
    <>
      <div>x:{x}</div>

      <Button type="primary" onClick={handle}>
        累加
      </Button>
    </>
  );
};

export default Demo;
