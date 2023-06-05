import React, { useState } from 'react';

/*
useState:React Hook函数之一，目的是在函数组件中使用状态，并且后期基于状态修改，可以使组件更新
    let [num,setNum]=useState(initalValue)
      -执行useState,传递的initalValue是一个初始化的状态值
      - 执行这个方法，返回结果是一个数组：[状态值，修改状态方法]
        - num 变量存储的是：获取的状态值
        - setNum变量存储的是：修改状态的方法
      - 执行setNum(value)
        - 修改状态值位value
        - 通知视图更新

函数组件 [或者Hook组件] 不是类组件，所以没有实例的概念[调用组件不再是创建类的实例，而是把函数执行，产生一个上下文] 所以，函数组件中不涉及this的处理
*/

const Test = (props) => {
  let [num, setNum] = useState(0);

  const Add = () => {
    setNum(num + 1);
  };
  return (
    <>
      <div>{num}</div>
      <button onClick={Add}>添加</button>
    </>
  );
};

export default Test;
