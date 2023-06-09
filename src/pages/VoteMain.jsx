import React from 'react';
import PropTypes from 'prop-types';

class VoteMain extends React.Component {
  //规则校验
  static defaultProps = {
    supNum: 0,
    oppNum: 0,
  };

  static propTypes = {
    supNum: PropTypes.number,
    oppNum: PropTypes.number,
  };

  //获取属性值
  render() {
    const { supNum, oppNum } = this.props;
    let radio = '',
      total = supNum + oppNum;
    if (total > 0) radio = ((supNum / total) * 100).toFixed(2) + '%';
    return (
      <div>
        <p>支持人数:{supNum}</p>
        <p>支持人数:{oppNum}</p>
        <p>支持比率：{radio}</p>
      </div>
    );
  }
}

export default VoteMain;
