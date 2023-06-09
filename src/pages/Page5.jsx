import React, { useState, useCallback } from 'react';

//父组件
const Page5 = () => {
  const [x, setX] = useState(10);
  const prev = '';
  /*
    useCallback:
      - 组件第一次渲染，useCallback(callback,[dependencies])
      - 组件后续的每一次更新，判断依赖的状态是否改变，如果改变，则重新创建出新的函数堆，赋值XXX，
      如果依赖的状态没有更新组件，[或者没有设置依赖“[]”],可以始终获取第一次创建函数的堆内存地址
   */
  const handle = useCallback(() => {
    setX(x + 1);
  }, []);

  return (
    <>
      <p>{x}</p>
      <button onClick={handle}>增加</button>
      <Child handle={handle} />
    </>
  );
};

// 子组件 父子传参(handle)
/*
  React.memo 对新老函数的函数进行浅对比，不一致：函数组件执行 一致：子组件不更新
 */
class Child extends React.memo {
  render() {
    return (
      <>
        <button>传参</button>
        <div>子组件</div>
      </>
    );
  }
}

export default Page5;
