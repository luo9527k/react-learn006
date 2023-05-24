import React from 'react';
import './test.css';
//测试
import Tast from './pages/tast';

const Test = () => {
  return (
    <>
      {/* 测试组件 */}
      <Tast id="1">
        <div>首页</div>
      </Tast>
      <div className="top">test组件</div>
      <p style={{ color: 'green', marginLeft: '15px' }}>文章</p>
      <ul>
        <li>第一篇</li>
      </ul>
      {/* 虚拟dom创建的对象 */}
      {React.createElement('button', null, '提交')}
      <Tast id="2">
        <div>底部</div>
      </Tast>
    </>
  );
};

export default Test;
