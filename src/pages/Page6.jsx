//自定义Hook
import React, { useEffect } from 'react';

//封装
const useDidMount = useDidMount((title) => {
  if (!title) {
    title = '哈哈哈';
  }
  useEffect(() => {
    document.title = title;
  }, []);
});

const Hook = (props) => {
  useDidMount();
  const {} = props;
  return (
    <>
      <div></div>
    </>
  );
};

export default Hook;
