import React from 'react';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
class Vote extends React.Component {
  state = {
    supNum: 0,
    oppNum: 0,
  };

  change = (type) => {
    const { supNum, oppNum } = this.state;
    if (type === 'sup') {
      this.setState({ supNum: supNum + 1 });
      return;
    }
    this.setState({ oppNum: oppNum + 1 });
  };
  render() {
    const { supNum, oppNum } = this.state;
    return (
      <>
        <h2>REACT框架拆分</h2>
        <span>{supNum + oppNum}</span>
        {/* 传值:把属性传递给子组件 */}
        <VoteMain supNum={supNum} oppNum={oppNum} />
        <VoteFooter change={this.change} />
      </>
    );
  }
}

export default Vote;
