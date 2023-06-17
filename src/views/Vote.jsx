import React from 'react';
import { Button } from 'antd';
import ThemeContext from '../ThemeContext';
import action from '../store/actions/index.js';

class Vote extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { index } = this.context;
    console.log(index.getState());
    return (
      <>
        <Button
          onClick={() => {
            // index.dispatch({
            //   type: 'vote_sup',
            // });

            //从管理模块拉取信息
            index.dispatch(action.vote.support());
          }}
        >
          +1
        </Button>
        <Button
          onClick={() => {
            // index.dispatch({
            //   type: 'vote_opp',
            // });

            index.dispatch(action.personal.oppose());
          }}
        >
          +1
        </Button>
      </>
    );
  }
}
export default Vote;
