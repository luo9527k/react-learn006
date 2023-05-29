import React from 'react';

class Demo extends React.Component {
  /*
    基于函数的内部处理，如果我们给合成事件绑定一个“普通函数”，单事件触发，绑定的函数执行，方法中的this会是undefind，解决方案：this-》实例
      - 我们可以把基于JS中的bind方法：预先处理函数的this和实参
      - 当然我们也可以把绑定的函数设置为“箭头函数”，使用上下文的this[也就是我们的实例]

  */
  handle(x, y, ev) {
    //只要经过bind处理，那么最后一个实参，就是传递的合成事件对象
    console.log(this, ev, x, y);
  }

  btn = (ev) => {
    //给实例添加私有属性
    console.log(this); //实例
    console.log(ev); //合成事件对象【内部经过特殊处理，把各个浏览器的事件对象统一化后，构建一个事件对象】
  };
  render() {
    // bind在React事件绑定的运用
    // 绑定的方法是一个普通函数，需要改变函数中的this是实例，此时需要用到bind[一般都是绑定箭头函数]
    // 向给函数传递指定的实参，可以基于bind 预先处理[bind会把会见对象以最后一个实参传递给函数]
    return (
      <>
        <div>
          <button onClick={this.handle.bind(this, 10, 20)}>按钮</button>
          <button onClick={this.btn}>BTN</button>
        </div>
      </>
    );
  }
}

export default Demo;
