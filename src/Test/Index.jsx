import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const Index = (props) => {
  const { title } = props;

  const [a1, a2] = useState('六');
  const Add = () => {
    a2(a1 + '哈哈哈');
  };

  useEffect(() => {
    console.log('on1', a1);
  });

  useEffect(() => {
    console.log('on2', a1);
  }, []);

  useEffect(() => {
    console.log('on3', a1);
  }, [a1]);

  useEffect(() => {
    return () => {
      console.log('one4', a1);
    };
  });

  return (
    <>
      <div>{title}</div>
      <div>
        <span>{a1}</span>
      </div>
      <Button onClick={Add}>添加</Button>
    </>
  );
};

export default Index;
