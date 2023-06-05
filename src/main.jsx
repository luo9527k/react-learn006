import React from 'react'; //语法核心
import ReactDOM from 'react-dom/client'; //渲染核心
import Test from '../src/views/Test';
import Main from '../src/views/Main';

//获取id为root的容器，作为我们的根容器
const root = ReactDOM.createRoot(document.getElementById('root'));

//基于数据的值，来判断元素的显示与隐藏
root.render(
  <>
    <Test />
    <Main id="1" />
  </>
);
