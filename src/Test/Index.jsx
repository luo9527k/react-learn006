import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { Button } from 'antd';

const Demo = React.forwardRef((props, ref) => {
  const [num, nextNum] = useState('哈哈哈');
  const Add = () => {
    nextNum('呃呃呃');
  };
  useImperativeHandle(ref, () => {
    return {
      Add,
      num,
    };
  });

  return (
    <>
      <div>{num}</div>
      <div>{props.title}</div>
    </>
  );
});

const Index = (props) => {
  const xa = useRef(null);

  useEffect(() => {
    console.log(xa.current);
  });
  return (
    <>
      <Button>点击</Button>
      <Demo ref={xa} />
    </>
  );
};

export default Index;
