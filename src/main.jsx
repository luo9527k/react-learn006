import React from 'react'; //语法核心
import ReactDOM from 'react-dom/client'; //渲染核心
import Test from './test.jsx';
import One from './pages/one';
import './index.css';
import { createElement, render } from './jsHandle.js';

//获取id为root的容器，作为我们的根容器
const root = ReactDOM.createRoot(document.getElementById('root'));

// let text = 'hello react🍚!';
// let flag = false;
// const isRun = false;

// 动态绑定数据
let data = [
  {
    id: 1,
    title: '嘻嘻',
  },
  {
    id: 2,
    title: '哈哈',
  },
  {
    id: 3,
    title: '一一',
  },
];

//基于数据的值，来判断元素的显示与隐藏
root.render(
  <>
    <h2 className="title">信息</h2>
    <ul className="info">
      {data.map((item, index) => {
        return (
          <li key={item.id}>
            <em>{item.id}</em>
            &nbsp;
            <span>{item.title}</span>
          </li>
        );
      })}
    </ul>
    <br />
    {/* 必须使用fill填充，不然数据会报错 */}
    {new Array(5).fill(null).map((_, index) => {
      return <button>按钮{index + 1}</button>;
    })}
    <Test />
    <One
      title="one组件"
      className="box"
      style={{ fontSize: '50px' }}
      data={[100, 200]}
    />
    <One title="嗨嗨嗨">
      <span slot="footer">emo</span>
      <br />
      <span slot="header">happly</span>
    </One>
  </>

  // <>
  //   <div className="box" style={{ color: '#ddd', fontSize: '18px' }}>
  //     {text}
  //   </div>
  //   {/* 控制元素display的样式 */}
  //   <button style={{ display: flag ? 'block' : 'none' }}>按钮</button>
  //   <br />
  //   {/* 控制元素渲染或者不渲染 */}
  //   {flag ? <button></button> : null}
  //   <br />
  //   <button>{isRun ? '正在处理中' : '立即提交'}</button>
  //   <Test />
  // </>
);
