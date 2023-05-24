import React from 'react';

//编写一个函数
const tast = (props) => {
  //获取传递的数值
  let { children, title, content } = props;

  // 将children转变为数组
  children = React.Children.toArray(children);
  return (
    <div className="main">
      <div className="header">
        <h2>{title}</h2>
      </div>
      <div className="footer">
        <p>{content}</p>
        <button>next</button>
      </div>
    </div>
  );
};

//导出组件
export default tast;
