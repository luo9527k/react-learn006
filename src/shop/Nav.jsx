import React from 'react';
// import './style/Nav.less';
import sty from './style/Nav.module.css';
import { createUseStyles } from 'react-jss';

// createUseStyles 会在js中编写样式
const useStyle = createUseStyles({
  box: {
    background: 'blue',
    boxShadow: '#000',
    fontSize: '20px',
  },
});

const Nav = () => {
  const { box } = useStyle();
  return (
    <>
      <nav className={box}>
        <h2 className={sty.title}>sopping now</h2>
        <div className="list">
          <div>首页</div>
          <div>秒杀</div>
          <div>我的</div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
