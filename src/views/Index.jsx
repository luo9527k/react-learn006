import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from '../ThemeContext';

const Index = (props) => {
  const { title, handle, top } = props;
  const { index } = useContext(ThemeContext);
  //获取容器中的公共组件
  const { supNum, oppNum } = index.getState();

  const [one, setOne] = useState(0);
  const Btn = () => {
    setOne(one + 1);
  };

  useEffect(() => {
    //unsubscribe 执行可以把刚放入事件中的方法移除
    //把组件更新的方法放入到index容器中
    const unsubscribe = index.subscribe(Btn);
    return unsubscribe;
  }, [one]);
  return (
    <>
      <h2>{title}</h2>
      <div>{supNum + oppNum}</div>
      <button onClick={Btn}>点击</button>
      <div>Index</div>
      <div>{handle}</div>
      <div>{top}</div>
    </>
  );
};

export default Index;
