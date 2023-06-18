import React from 'react';
import { Button } from 'antd';
import ThemeContext from '../ThemeContext';
import action from '../store/actions/index.js';
//1. import {connect} from 'react-redux'

class Vote extends React.Component {
  static contextType = ThemeContext;
  render() {
    //2. const {supNum,oppNum}=this.props
    console.log(connect);
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
// 3.export default connect(null,action.vote)(Vote);

/*
原理：
export default connect(null,dispatch=>{
      null,
      dispatch=>{
        return{
          support(){
            dispatch(action.vote.support())
          },
          oppose(){
            dispatch(action.vote.oppose())
          }
        }
      }
})(Vote);
 */

/**
  connect(mapstateToProps,mapDispatchToProps)(我们需要渲染的组件)
  mapDispatchToProps：把需要派发的任务，当作属性传递给组件
  connect(null,dispatch=>{
    dispatch:store.dispatch
  
    //返回对象中的信息，会作为属性传递给组件
    return{
      ...
    }
  }
  )(vote)
 */
