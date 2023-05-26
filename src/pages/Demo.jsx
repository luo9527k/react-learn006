import React from 'react';
import '../style/Demo.css';

/*
  PureComponent 与 Component 的区别：
  - PureComponent会给类组件默认添加一个shouldComponentUpdate周期函数
  - 在此周期函数中，它会对新/老的属性/状态，会做一个浅比较
  - 如果经过浅比较，发现属性和状态并没有发生改变，则返回false[不在继续更新组件] ：有变化才会去更新
  -如果想要使其数组改变其状态，则可以赋值在新的数组中，例如：arr:[...arr],解构出数组，并添加到新的数组中
*/

class Demo extends React.PureComponent {
  state = {
    arr: [10, 20, 30],
  };
  render() {
    //获取数据
    let { arr } = this.state;
    return (
      <>
        {arr.map((item, index) => {
          return (
            <span key={index} className="arr">
              {item}
            </span>
          );
        })}
        <br />
        <button
          onClick={() => {
            arr.push(40);
            this.setState({
              arr: [...arr], //使arr状态值改为一个新的数组 [堆地址]
            });
          }}
        >
          添加一个span
        </button>
      </>
    );
  }
}

export default Demo;
