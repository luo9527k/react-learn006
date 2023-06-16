import * as Types from '../js/action-type';

const combineReducers = (reducers) => {
  let reducerskeys = Reflect.ownKeys(reducers);
  /**
   * reducerskeys['vote','personal']
   * 返回一个合并的reducer
   * - 每一次dispatch派发，都是把这个reduce执行
   * - state就是派发的时候传递进来的行为对象
   * - action 就是派发时候传递进来的行为对象
   */
  return function reducer(state = {}, action) {
    //把reducer中的每一个小的renducer (每一个模块的reducer执行)；把对应模块的状态/action行为对象进来，返回的值替换当前模块下的状态
    let nextState = {};
    //key:模块名
    reducerskeys.forEach((key) => {
      //reducer：每块模型的reducer
      let reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
    });
    return nextState;
  };
};

export default combineReducers;

store.dispatch({
  type: Types.vote_sup,
});
