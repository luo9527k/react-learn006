import React from 'react';
import { ColorPicker, Alert } from 'antd';

class Test extends React.Component {
  render() {
    return (
      <>
        <ColorPicker />
        <Alert message={'这是一条信息'} />
      </>
    );
  }
}
export default Test;
