import { useState } from 'react';
import { Button } from 'antd';

const Vote2 = (props) => {
  const [one, setOne] = useState(10),
    [two, setTwo] = useState(20);

  const handle = (type) => {
    if (type === 'add') {
      setOne(one + 1);
      return;
    }
    setTwo(two + 1);
  };
  return (
    <>
      <h3>{props.title}</h3>
      <div>支持的人数为：{one}</div>
      <div>反对的人数为：{two}</div>
      <span>总人数为：{one + two}</span>
      <div>
        <Button type="primary" onClick={handle.bind(null, 'add')}>
          支持
        </Button>
        <Button type="dashed" onClick={handle}>
          反对
        </Button>
      </div>
    </>
  );
};

export default Vote2;
