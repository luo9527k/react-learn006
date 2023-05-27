import React from 'react';

class Tast extends React.Component {
  span = React.createRef();
  render() {
    return (
      <>
        <div ref="Dom">类组件</div>
        <div ref={T=>this.div=T}>函数创建的类组件</div>
        <div ref={this.span}>类组件特殊写法</div>
      </>
    );
  }
  componentDidMount() {
    console.log(this.refs.Dom);
    console.log(this.div);
    console.log(this.span.current);
  }
}

export default Tast;
