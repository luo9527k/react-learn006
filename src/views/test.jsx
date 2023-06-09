import React, { useState, useMemo } from 'react';

const Page4 = () => {
  const [supNum, setSupNum] = useState(10),
    [oppNum, setOppNum] = useState(20);

  //计算百分比
  // const total = supNum + oppNum;
  // let ratio = '';
  // if (total > 0) ratio = ((supNum / total) * 100).toFixed(2) + '%';

  /*
  let xxx= useMemo (callback,[dependencies])
    - 第一次渲染组件的时候，callback执行
    - 后期只有依赖的状态值发生变化，callback才会执行
    - 每一次会把callback执行的返回结果赋值给xxx
    useMemo具有“计算缓存”，在依赖的状态值没有发生改变，callback没有触发执行的时候，xxx获取的是上一次计算出来的结果

    useMemo就是一个优化的Hook函数
      - 如果函数组件中，有消耗性能/时间的计算操作，则尽可能用useMemo存储起来，设置对应的依赖
      - 这样可以保证，当非依赖发生改变，不会去处理一些没有必要的操作，提高组件更新速度
   */
  let ratio = useMemo(() => {
    let total = supNum + oppNum,
      ratio = '--';
    if (total > 0) ratio = ((supNum / total) * 100).toFixed(2) + '%';
    return ratio;
  }, [supNum, oppNum]);

  return (
    <>
      <div>{oppNum}</div>
      <div>{supNum}</div>
      <div>百分比：{ratio}</div>
      <button
        onClick={() => {
          setSupNum(supNum + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setOppNum(oppNum + 1);
        }}
      >
        +1
      </button>
    </>
  );
};

export default Page4;
