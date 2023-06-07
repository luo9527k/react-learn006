import React, { useState, useEffect } from 'react';

/*
  useEffect:在函数组件中，使用生命周期函数
    - useEffect(callback)
    - 第一次渲染完成后，执行callback，等价于 compoentDidMount
    - 在组件每一次更新完毕后，也会执行callback，等价于 compoentDidUpdate

    useEffect(callback,[])
    - 只渲染一次后，执行callback，每一次执行更新完毕后，callback 不再执行
    - 等价于 compoentDidMount

    useEffect(callback,[依赖的状态(多个状态)])
    - 第一次渲染完成后，执行callback
    - 当依赖的状态值(或者多个依赖状态中的一个)发生改变，也会触发callback执行
    - 但是依赖的状态如果没有变化，在组件更新的时候，callback是不会执行的
 */
const Page = () => {
  let [num, setNum] = useState(0);

  //callback没有设置依赖
  useEffect(() => {
    console.log('ok', num);
  });

  //callback 无依赖
  useEffect(() => {
    console.log('ok2', num);
  }, []);

  //callback 依赖num
  useEffect(() => {
    console.log('ok3', num);
  }, [num]);

  //callback没有设置依赖 没有任何输出
  useEffect(() => {
    return () => {
      //返回的小函数，会在组件释放的时候执行
      //获取的是上一次的状态值
      console.log('ok4', num);
    };
  }, [num]);

  const handle = () => {
    setNum(num + 1);
  };
  return (
    <>
      <div>
        <span>{num}</span>
        <button onClick={handle}>增加</button>
      </div>
    </>
  );
};

export default Page;
