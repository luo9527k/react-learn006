import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const VoteFooter = (props) => {
  const { handle } = props;
  return (
    <>
      <Button type="primary" onClick={handle.bind(null, 'sup')}>
        支持
      </Button>
      <Button type="default" onClick={handle.bind(null, 'opp')}>
        反对
      </Button>
    </>
  );
};

//校验规则
VoteFooter.defaultProps = {};
VoteFooter.propTypes = {
  handle: PropTypes.func.isRequired,
};

export default VoteFooter;
