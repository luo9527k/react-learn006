import React from 'react';

class Test extends React.Component {
  btn = (x, y, ev) => {
    console.log(this, x, y, ev);
  };
  bun = (ev) => {
    console.log(ev);
  };

  render() {
    return (
      <>
        <div>test组件</div>
        <button onClick={this.btn.bind(11, 22)}>Test按钮</button>
        <button onClick={this.bun}>bun按钮</button>
      </>
    );
  }
}
export default Test;
