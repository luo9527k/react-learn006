import React from 'react'; //语法核心
import ReactDOM from 'react-dom/client'; //渲染核心
import { ConfigProvider } from 'antd';
import index from './store/index.js';
import test from './store/test.js';
import ThemeContext from './ThemeContext';
import Index from './views/Index';
import Main from './views/Main';
import Vote from './views/Vote';
//1. import {Provider} from 'react-redux'

//获取id为root的容器，作为我们的根容器
const root = ReactDOM.createRoot(document.getElementById('root'));

//基于数据的值，来判断元素的显示与隐藏
root.render(
  <ConfigProvider>
    <ThemeContext.Provider value={{ index, test }}>
      <Index title="这是一条信息" handle="app" top={'frist'} />
      <Main />
      <Vote />
    </ThemeContext.Provider>
    {/* 2.<Provider>
      ...组件
    </Provider> */}
  </ConfigProvider>
);
