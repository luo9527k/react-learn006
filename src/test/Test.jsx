import React from 'react';
import '../test/Test.less';

class Test extends React.Component {
  pop(x, y, ev) {
    console.log(x, y, ev);
  }

  text = (ev) => {
    console.log(ev);
  };
  render() {
    return (
      <>
        <div
          className="top"
          onClick={() => {
            console.log('冒泡top');
          }}
        >
          <div
            className="content"
            onClick={() => {
              console.log('冒泡content');
            }}
          >
            <div
              className="footer"
              onClick={() => {
                console.log('冒泡 fotter');
              }}
            ></div>
          </div>
        </div>
        <button onClick={this.pop.bind(0, 'string')}>Pop</button>
        <button onClick={this.text}>Coc</button>
      </>
    );
  }
}
export default Test;
