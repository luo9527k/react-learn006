/*
创建一个类组件
   创建构造函数（类） ，要求必须继承React.Component/PureComponent这个类
    - 我们习惯于ES6中的class创建类
    - 必须给当前类设置一个render方法【放在其原型上】：在render方法中，返回需要渲染的视图
 */

import React from 'react';

// React 继承Component
class Vote extends React.Component {
  render() {
    <div className="vote-box">
      <div className="header">
        <h2 className="title">{title}</h2>
        <span>{supNum + opNum}</span>
      </div>
      <div className="main">
        <p>支持人数：{supNum}人</p>
        <p>反对人数：{opNum}人</p>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            supNum++;
            console.log(supNum);
          }}
        >
          支持
        </button>
        <button
          onClick={() => {
            opNum--;
            console.log(opNum);
          }}
        >
          反对
        </button>
      </div>
    </div>;
  }
}

export default Vote;

/*
基于extends实现继承
1.call继承
2.基于原型继承 Parent.prototype.__proto__===React.Compoent.prototype--》实例--》Parent.prototype--》React.Compoent.prototype--》Object.prototype
3.只要自己设置了constructor,则内部的第一句一定要执行 super（）
 */

class Parent extends React.Component {
  constructor(props) {
    super(props);
  }
  x = 100;
  getR() {}
}

let p = new parent(10, 20);
console.log(p);
