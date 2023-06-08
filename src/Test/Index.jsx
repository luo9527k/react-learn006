import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { Button } from 'antd';

const Demo = React.forwardRef((props, ref) => {
  const Add = () => {};
  useImperativeHandle(() => {
    return (
      <>
        <div>{props.title}</div>
      </>
    );
  });
});

const Index = (props) => {
  const xa = useRef(null);

  useEffect(() => {
    console.log(xa.current);
  });
  return (
    <>
      <Button />
      <Demo ref={xa} />
    </>
  );
};

export default Index;
