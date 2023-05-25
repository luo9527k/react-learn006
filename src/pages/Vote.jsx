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
  }
  render() {
    let { title } = this.props;
    return (
      <div className="vote-box">
        <div className="header">
          <h2 className="title">{title}</h2>
          <span>{}</span>
        </div>
        <div className="main">
          <p>支持人数：{}人</p>
          <p>反对人数：{}人</p>
        </div>
        <div className="footer">
          <button onClick={() => {}}>支持</button>
          <button onClick={() => {}}>反对</button>
        </div>
      </div>
    );
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
