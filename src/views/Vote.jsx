import React from 'react';

const Vote = () => {
  const tack = 5;
  const oppose = 10;
  return (
    <>
      <h2>标题</h2>
      <span>{tack + oppose}</span>
      <p>支持人数：{tack}人</p>
      <p>反对人数：{oppose}人</p>
      <button>支持</button>
      <button>反对</button>
    </>
  );
};

export default Vote;
