import React from 'react'; //语法核心
import ReactDOM from 'react-dom/client'; //渲染核心
import Task from './views/Task';
//使用ANTD组件库
import { ConfigProvider } from 'antd'; //使用汉化包
import zhCN from 'antd/locale/zh_CN';
//导入全局样式
import './main.less';

//获取id为root的容器，作为我们的根容器
const root = ReactDOM.createRoot(document.getElementById('root'));

//基于数据的值，来判断元素的显示与隐藏
root.render(
  <ConfigProvider locale={zhCN}>
    <Task />
  </ConfigProvider>
);
