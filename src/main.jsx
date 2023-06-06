import React from 'react'; //语法核心
import ReactDOM from 'react-dom/client'; //渲染核心
import Test from '../src/views/Test';
import Root from '../src/views/Root';
// import Vote from '../src/views/Vote';
// import Vote2 from '../src/views/Vote2';
import Position from '../src/views/Position';
import { ConfigProvider } from 'antd';

//获取id为root的容器，作为我们的根容器
const root = ReactDOM.createRoot(document.getElementById('root'));

//基于数据的值，来判断元素的显示与隐藏
root.render(
  <ConfigProvider>
    <Test />
    <Root />
    <Position />
    {/* <Vote title="全民投票" />
    <Vote2 title="投票器" /> */}
  </ConfigProvider>
);
