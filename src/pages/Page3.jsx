import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';

/*
  基于forwardRef实现ref转发
  useImperativeHandle
 */
const Demo = React.forwardRef((props, ref) => {
  let [text, setText] = useState('hello');
  let Btn = () => {};
  useImperativeHandle(ref, () => {
    return {
      text,
      Btn,
    };
  });
  return (
    <div className="child">
      <span ref={ref}>嗡嗡嗡</span>
    </div>
  );
});

const Page = () => {
  let [num, setNum] = useState(0);
  let box1 = useRef(null),
    box2 = React.createRef();
  let x = useRef(null);

  // const box = React.createRef();

  /*
    在函数组件中，还可以基于 useRef hook函数，创建一个ref对象
      - React.createRef 也是创建ref对象，亦可以在函数组件中使用，也可以在函数组件中使用
      - useRef 只能在函数组件中用
      在类组件中创建Ref对象，我们基于 React.creatRef 处理；但是在函数组件中，为了保证性能，我们应该使用专属的useRef

      useRef 的优点：
          1.useRef在每一次组件更新的时候(函数重新排列)，再次执行 useRef 不会创建新的Ref对象，获取到的函数第一次创建的Ref对象
  */
  // const box = useRef(null);
  // console.log(box);

  useEffect(() => {
    console.log(box1.current);
    console.log(box2.current);
    console.log(x.current);
  }, []);

  const handle = () => {
    setNum(num + 1);
  };
  return (
    <>
      <div>
        <span ref={box1}>{num}</span>
        <span ref={box2}>$$$</span>
        <button onClick={handle}>增加</button>
        <Demo ref={x} />
      </div>
    </>
  );
};

export default Page;
