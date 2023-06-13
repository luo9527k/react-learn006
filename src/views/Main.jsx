import React from 'react';
import ThemeContext from '../ThemeContext';

class Main extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { test } = this.context;
    console.log(test.getState());
    return (
      <>
        <div>类组件</div>
      </>
    );
  }
  componentDidMount() {
    const { index } = this.context;
    index.subscribe = () => {
      this.forceUpdate(); //强制组件更新
    };
  }
}
export default Main;
