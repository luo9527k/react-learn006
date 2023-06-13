import React, { useState, useEffect, useLayoutEffect } from 'react';
import { flushSync } from 'react-dom';

const Index = () => {
  const [x, setX] = useState(10);
  useEffect(() => {
    console.log(`this${x}`);
  });
  useEffect(() => {
    console.log(`this${x}`); //只执行一次
  }, []);
  useEffect(() => {
    console.log(`this${x}`); //立即执行
  }, [x]);

  useLayoutEffect(() => {
    console.log(`useLayoutEffect${x}`); //最先执行
  });
  useLayoutEffect(() => {
    console.log(`useLayoutEffect${x}`); //只渲染一次，之后的操作不执行
  }, []);
  const Add = () => {
    setX(x + 1);
  };
  return (
    <>
      <button onClick={Add}>点击</button>
    </>
  );
};

export default Index;
