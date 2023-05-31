import React from 'react'; //语法核心
import ReactDOM from 'react-dom/client'; //渲染核心
import Test from './test/Test';
// import Demo from './views/Demo';
// import Index from './views/Index';
// import './views/Index.less';
import Demo1 from './views/Demo1';

//获取id为root的容器，作为我们的根容器
const root = ReactDOM.createRoot(document.getElementById('root'));

//基于数据的值，来判断元素的显示与隐藏
root.render(
  <>
    {/* <Demo /> */}
    <Test />
    {/* <Index /> */}
    <Demo1 />
  </>
);
