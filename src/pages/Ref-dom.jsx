import React from 'react';

// 一个类组件
class Child1 extends React.Component {
  render() {
    return (
      <>
        <div>子组件</div>
        <button ref={xa=>this.boxButton=xa}>100</button>
      </>
    );
  }
}

// 一个函数组件
const Child2 = React.forwardRef(function Child2(props, ref) {
  // console.log(ref)  我们调用child2的时候，设置的ref属性值[函数]
  return (
    <>
      <div>子组件2</div>
      <span ref={ref}>组件2信息</span>
    </>
  );
});

class RefDom extends React.Component {
  render() {
    return (
      <>
        <div>
          <Child1 ref={x=> this.div1 = x}></Child1>
          <Child2 ref={x => this.div2 = x}></Child2>
        </div>
      </>
    );
  }
  componentDidMount() {
    console.log(this.div1); //存储的是：子组件的实例对象
    console.log(this.div2); //存储的是：
  }
}

export default RefDom;

/*
元素标签设置ref 目的：获取到对应的DOM元素

给类设置ref 目的：获取到当前组件的实例

给函数组件ref，会直接报错 
  -我们可以React.forwardRef实现 ref 的转发
  - 目的：获取函数组件内部的某个元素
*/
