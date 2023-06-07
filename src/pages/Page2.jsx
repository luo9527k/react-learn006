import React, { useState, useEffect } from 'react';

const Page = () => {
  let [num, setNum] = useState(0);
  //useEffect 必须在函数的最外层上下文中调用，不能把其嵌入到条件判断、循环等操作中
  // if (num > 5) {
  //   useEffect(() => {
  //     console.log('ok');
  //   });
  // }

  //模拟服务器异步获取数据
  const queryData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([10, 20, 30]);
      }, 1000);
    });
  };

  useEffect(() => {
    if (num > 5) {
      console.log('ok'); //当函数大于5的时候打印
    }
  }, [num]);

  //第一次渲染完毕后，从服务器异步获取数据
  // useEffect(async () => {
  //   const data = await queryData();
  //   console.log('ok', data);
  // }, []);

  useEffect(() => {
    queryData().then((data) => {
      console.log('success', data);
    });
  }, []);

  const handle = () => {
    setNum(num + 1);
  };
  return (
    <>
      <div>
        <span>{num}</span>
        <button onClick={handle}>增加</button>
      </div>
    </>
  );
};

export default Page;
