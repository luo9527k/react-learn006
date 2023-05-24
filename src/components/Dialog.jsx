//导入属性校验
import PropTypes from 'prop-types';
import React from 'react';
import './Dialog.css';


const Dialog = (props) => {
  //获取传递属性和插槽信息
  let { title, content, children } = props;
  //变成数组
  children = React.Children.toArray(children);
  return (
    <div className="dialog-box">
      {/* 头部 */}
      <div className="header">
        <h2 className="title">{title}</h2>
        <span>x</span>
      </div>
      {/* 主体内容 */}
      <div className="main">{content}</div>
      {children.length > 0 ? <div className="footer">{children}</div> : null}
    </div>
  );
};
//属性规则校验
Dialog.defaultProps = {
  title: '提示栏提示',
};
Dialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired, //必传
};

export default Dialog;
