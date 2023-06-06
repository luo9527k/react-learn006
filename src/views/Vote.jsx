import { useState } from 'react';

const Vote = (props) => {
  const [tack, setTack] = useState(5);
  const [oppose, setOppose] = useState(10);

  const Add = () => {
    setTack(tack + 1);
  };
  const Count = () => {
    setTack(oppose + 1);
  };
  return (
    <>
      <h2>{props.title}</h2>
      <span>{tack + oppose}</span>
      <p>支持人数：{tack}人</p>
      <p>反对人数：{oppose}人</p>
      <button onClick={Add}>支持</button>
      <button onClick={Count}>反对</button>
    </>
  );
};

export default Vote;
