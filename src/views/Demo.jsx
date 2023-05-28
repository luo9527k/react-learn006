import React from 'react';

class Demo extends React.Component {
  handle() {
    console.log('hh');
  }
  render() {
    return (
      <>
        <div>
          <button onClick={this.btn}>按钮</button>
        </div>
      </>
    );
  }
}

export default Demo;
