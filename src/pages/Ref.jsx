import React from 'react';

class Ref extends React.Component {
  box2 = React.createRef(); //this.box2=xxx
  render() {
    return (
      <>
        <div>
          <h2 className="title" ref="Box">
            提示词
          </h2>
          <h2 className="title" ref={(x) => (this.box1 = x)}>
            更新提示词
          </h2>
          <h2 className="title" ref={this.box2}>
            提示词完毕
          </h2>
        </div>
      </>
    );
  }
  componentDidMount() {
    //此时渲染完毕[虚拟DOM已经变为真实DOM]：this.refs.Box 可以获取需要操作的DOM元素[不推荐]
    // console.log(this.refs.Box);
    // console.log(this.box1);
    // console.log(this.box2.current);
  }
}

export default Ref;

/*
  受控组件：基于修改数据/状态，让视图更新，达到需要的效果。

  非受控组件：基于ref获取DOM元素，操作DOM元素，来实现需求和效果。
    获取DOM元素的语法：
      1.给需要的元素设置ref=xxx，后期基于this.ref.xxx 去获取相应的DOM元素

      2.把ref属性设置为一个函数
      ref={x=this.xxx = x}
        - x就是函数的形参：存储的就是当时的DOM元素
        - 然后我们获取的DOM元素 “x” 直接挂载到某个属性上
        获取：this.xxx

      3.基于 React.createRef() 方法创建了一个 REF 对象 
      this.xxx=React.createRef() ;  //this.xxx={current：null}
        ref={REF对象(this.xxx)}
        获取：this.xxx.current

    原理：在render渲染的时候，会获取virtualDOM的ref属性
    - 如果属性值是一个字符串，则会给this.refs增加这样的一个成员，成员值就是当前的DOM元素
    - 如果属性值是一个函数，则会把函数执行，板当前dom元素传递给这个函数[x-》DOM元素]，而在函数的执行的内部，我们一般会把DOM元素直接挂载到实例的某个属性上
*/
