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
    const { test } = this.context;
    test.subscribe = () => {
      this.forceUpdate(); //强制组件更新
    };
  }
}
export default Main;
