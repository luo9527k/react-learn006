import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const VoteMain = (props) => {
  const { supNum, oppNum, title } = props;

  let root = useMemo(() => {
    let total = supNum + oppNum,
      root = '%';
    if (total > 0) {
      root = ((supNum / total) * 100).toFixed(1) + '%';
    }
    return root;
  }, [supNum, oppNum]);
  return (
    <>
      <div>
        <h3>{title}</h3>
        <p>支持人数：{supNum}</p>
        <p>反对人数：{oppNum}</p>
        <div>比率{root}</div>
      </div>
    </>
  );
};

//属性校验：
VoteMain.defaultProps = {
  supNum: 0,
  oppNum: 0,
};

VoteMain.propType = {
  supNum: PropTypes.number,
  oppNum: PropTypes.number,
};

export default VoteMain;
