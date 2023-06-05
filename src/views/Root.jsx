import Reat, { useState } from 'react';

/*
函数组件的每一次渲染(或者是更新)，都是把函数(重新)执行，产生一个全新的 "私有上下文"
  - 内部的代码也需要重新执行
  - 涉及的函数需要重新构建{这些函数的作用域(函数执行的上下文)，是每一次执行Demo产生的闭包}
  - 每一次执行Demo函数，也会把useState重新执行，但是：
    - 执行useState，只有第一次，设置的初始值会生效，其余以后再执行，获取的状态都是最新的状态值[而不是初始值]
  - 返回的修改状态的方法，每一次都是返回一个新的
*/
const Root = () => {
  const [count, setCount] = useState(0);
  const sum = () => {
    setCount(count + 10);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={sum}>打印</button>
    </>
  );
};

export default Root;

//内组件实现
// import React from 'react';

// class Root extends React.Component {
//   state = {
//     num: 0,
//   };

//   Btn = () => {
//     const { num } = this.state;
//     this.setState({
//       num: num + 1,
//     });
//   };
//   render() {
//     const { num } = this.state;
//     return (
//       <>
//         <div>{num}</div>
//         <button onClick={this.Btn}>增加</button>
//       </>
//     );
//   }
// }

// export default Root;
