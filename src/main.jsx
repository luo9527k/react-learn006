import React from 'react'; //语法核心
import ReactDOM from 'react-dom/client'; //渲染核心
import Index from './views/Index';
import { ConfigProvider } from 'antd';

//获取id为root的容器，作为我们的根容器
const root = ReactDOM.createRoot(document.getElementById('root'));

//基于数据的值，来判断元素的显示与隐藏
root.render(
  <ConfigProvider>
    <Index title="这是一条信息" handle="app" top={'frist'} />
  </ConfigProvider>
);
