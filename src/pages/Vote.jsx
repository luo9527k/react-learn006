/*
创建一个类组件
   创建构造函数（类） ，要求必须继承React.Component/PureComponent这个类
    - 我们习惯于ES6中的class创建类
    - 必须给当前类设置一个render方法【放在其原型上】：在render方法中，返回需要渲染的视图

    从调用类组件[new Vote{...}]开始，类组件内部发生的事情：
    1.初始化属性&&规则校验
    一：constructor(props){
      super(props) //会把传递进来的属性挂载到this的实例上
      console.log(this.props) //获取到传递的属性
    }
    二：即使我们自己不再constructor中处理,react内部也会把传递的props挂载到实例上；所以在其它的函数中只要保证this是实例，就可以基于this.props获取传递的属性

    设置规则校验
    2.初始化状态
    状态：后期修改状态，可以触发视图的更新
    需要手动初始化，如果我们没有去做相关的处理，则默认会往实例上挂载一个state，初始值是null=》this.state=null

    -------修改变量
    只能修改状态，并不能使视图更新
      @1 this.setState(partialState)  //既可以修改状态也可以让视图更新
         partialState:部分状态
         this.setState({
         xxx:xxx(+1 && -1)
         })

      @2 this.forceUpdate() //强制更新

    3.触发 compoentWillMount 周期函数（钩子函数）
    钩子函数：在程序运行到某个阶段，我们可以基于提供一个处理函数，让开发者在这个阶段做一些自定义的事情

    4.触发render函数：渲染
    5.将虚拟DOM转变为真实DOM
    【REACT-hook生命周期】
   1. shouldComponentUpdate此周期需要返回true/false
    返回true：允许更新，会继续执行下一个操作
    返回false：不允许更新，接下来不会进行任何处理

   2.触发componentWillUpdate 周期函数：更新之前
   - 此周期函数也是不安全的
   - 在这个阶段，状态还没有被修改

   3.修改状态/属性值 [让this.state.xxx改为最新的值]

   4.触发 render 周期函数：组件更新
    - 按照最新的状态属性，把返回的JSX编译为VirtualDOM
    - 和上次渲染出来的虚拟DOM进行对比【DOM-DIFF】
    把差异部分进行渲染【渲染为真实DOM】

    5.触发 compoentDidUpdate 周期函数：组件更新完毕
    特殊说明：如果我们是基于this.forceUpdate()，这回强制更新视图，会跳过 shouldComponentUpdate进行更新

    组件更新逻辑：
         一：子组件更新，导致父组件更新
         二：父组件更新，触发的子组件更新[触发componentWillReceiveProps]
         this.props:存储之前的属性，
         nextProps：传递进来的最新的属性值
 */

import React from 'react';
import PropTypes from 'prop-types';

// React 继承Component
class Vote extends React.Component {
  //属性校验规则
  static defaultProps = {
    num: 0,
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number,
  };
  constructor(props) {
    super(props);
    // console.log(this.props); //获取属性
  }
  // 初始化状态
  state = {
    supNum: 10,
    oppNum: 5,
  };

  render() {
    let { title } = this.props,
      { supNum, oppNum } = this.state;
    return (
      <div className="vote-box">
        <div className="header">
          <h2 className="title">{title}</h2>
          <span>{supNum + oppNum}</span>
        </div>
        <div className="main">
          <p>支持人数：{supNum}人</p>
          <p>反对人数：{oppNum}人</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              this.setState({
                supNum: supNum + 1,
              });
            }}
          >
            支持
          </button>
          <button
            onClick={() => {
              this.state.oppNum++;
              this.forceUpdate();
            }}
          >
            反对
          </button>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    console.log('第一次渲染之前');
  }

  componentDidMount() {
    console.log('第一次渲染完毕');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state, nextProps);
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', this.state, nextProps);
  }

  componentDidUpdate() {
    console.log('组件更新完毕');
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps);
  }

  UNSAFE_componentWillMount() {
    console.log('组件销毁之前');
  }
}
export default Vote;

/*
基于extends实现继承
1.call继承
2.基于原型继承 Parent.prototype.__proto__===React.Compoent.prototype--》实例--》Parent.prototype--》React.Compoent.prototype--》Object.prototype
3.只要自己设置了constructor,则内部的第一句一定要执行 super（）
 */

// class Parent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   x = 100;
//   getR() {}
// }

// let p = new parent(10, 20);
// console.log(p);
