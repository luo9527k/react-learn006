import React from 'react';

class State extends React.Component {
  state = {
    xa: 10,
    xb: 20,
    xc: 30,
  };

  handle = () => {
    let { xa, xb, xc } = this.state;

    //同时渲染三个状态：只会触发一次视图更新
    // this.setState({
    //   xa: xa + 1,
    //   xb: xb + 1,
    //   xc: xc + 1,
    // });

    // this.setState(
    //   {
    //     xa: 100,
    //   },
    //   () => {
    //     console.log('更新完毕x属性'); //最后执行
    //   }
    // );
  };

  componentDidUpdate() {
    // console.log('更新完毕'); //第二执行
    return false;
  }

  render() {
    console.log('视图渲染'); //第一执行
    //解构实例中的属性
    const { xa, xb, xc } = this.state;
    return (
      <>
        <div>
          {xa}-{xb}-{xc}
        </div>
        <br />
        <button onClick={this.handle}>按钮</button>
      </>
    );
  }
}

export default State;

/*
    this.setState([partialState],[callback])
    [partialState]:支持部分状态更改

    [callback]视图更新完毕后执行，只要执行了setState，callback一定会执行
      -发生在componentDidUpdate周期之后
      - componentDidUpdate 会在任何状态更改后触发执行；而回调函数方式，可以在指定状态后处理
      - 特殊：无论阻止状态/视图的更新，设置的callback回调函数一定会被触发执行

setState的同步操作：shouldUpdate=>willUpdate=>修改状态值=>render=>didUpdate=>callback

=========
在React18中，setState在任何地方执行，都是“异步操作”
  - 在React18中有一套更新队列的机制
  - 基于异步操作，实现状态的“批处理” [统一处理]
  好处：
  - 减少视图的更新频率，降低渲染消耗的性能
  - 让更新的逻辑和流程更加清晰/稳健
  - 有效管理代码执行的逻辑顺序
  原理：
  - 利用更新队列[updater] 机制来处理的
  - 在当前相同的时间段内[浏览器可以处理的事情中]，遇到setState会立即放入到更新队列中
  - 此时状态/视图还未更新
  - 当所有的代码操作结束，会“刷新队列”[通知更新队列的执行任务]：把所有放入的setState合并在一起执行，只触发一次视图更新[批处理操作]
*/
