import React from 'react';
import ThemeContext from '../ThemeContext';
// import { connect } from 'react-redux';

class Main extends React.Component {
  static contextType = ThemeContext;
  render() {
    // const { supNum,oppNum } = this.props;
    console.log(connect);
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
// export default Main;
export default connect((state) => state.vote(Main));
