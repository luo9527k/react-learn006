import React from 'react';
import PropTypes from 'prop-types';

class VoteFooter extends React.Component {
  static propTypes = {
    change: PropTypes.func.isRequired,
  };
  render() {
    const { change } = this.props;
    return (
      <>
        {/* .bind('null', 'type')传递进来的值可以进行绑定 */}
        <button onClick={change.bind('null', 'sup')}>支持</button>
        <button onClick={change.bind('null', 'opp')}>反对</button>
      </>
    );
  }
}

export default VoteFooter;

/**
  父子组件通信：
    1.以父组件为主导，基于“属性”实现通信 原因：只有父组件可以调用子组件，此时才可以基于属性。
    - 把信息传递给子组件[父--》子]
    - 父组件基于属性[插槽]，可以把HTML结构传递给子组件[父--》子]
    - 父组件把方法基于属性传递给子组件，子组件把传递的方法执行[子--》父]

 */
