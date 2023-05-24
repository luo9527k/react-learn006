import propTypes from 'prop-types';
import React from 'react';

const Demo = function One(props) {
  let { className, style, title, data, children } = props;
  // 要对children的类型做处理
  // 可以基于React.Children对象中提供的方法，对props.children做处理：count/forEach/map/toArray
  // 好处：在这些方法的内部，已经对children的各种形式做了处理

  //之前的处理
  // if (!children) {
  //   children = [];
  // } else if (!Array.isArray(children)) {
  //   children = [children[0]];
  // }

  // 之后的处理（把children变为数组
  children = React.Children.toArray(children);
  // 具名插槽 headerSlot 、footerSlot
  let headerSlot,
    footerSlot = [],
    //存放其他无名插槽
    defaultSlot = [];

  //传递进来的插槽信息，都是编译为VirtualDOM后传递进来的[而不是传递的标签] ***
  //   children.forEach(child => {
  //     let { slot } = child.props;
  //     if (slot === "header") {
  //       headerSlot.push('child')
  //     } else if (slot === "footer") {
  //       footerSlot.push(child)
  //     } else {
  //       defaultSlot.push(child)
  //     }
  // })

  return (
    <div className={`box ${className}`} style={style}>
      {headerSlot}
      <h2 className="title">{title}</h2>
      {/* {title}-{data} */}
      {/* 使用插槽 */}
      {footerSlot}
    </div>
  );
};
// 通过把函数当作对象，设置静态的私有属性方法，来给其设置属性的校验规则
// One.defaultProps = {
//   className: box,
// };

// 规则校验
// One.propTypes = {
//   title: propTypes.string.isRequired, //必传
//   style: propTypes.any, //任意类型
// };

//导出
export default Demo;
