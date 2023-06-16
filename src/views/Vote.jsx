import React, { useContext } from 'react';
import { Button } from 'antd';
import ThemeContext from '../ThemeContext';
// import action from '../store/actions/index.js';

class Vote extends React.Component {
  static contextType = useContext(ThemeContext);
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
            store.dispatch(action.vote.support());
          }}
        >
          +1
        </Button>
        <Button
          onClick={() => {
            // index.dispatch({
            //   type: 'vote_opp',
            // });

            store.dispatch(action.personal.oppose());
          }}
        >
          +1
        </Button>
      </>
    );
  }
}
export default Vote;
