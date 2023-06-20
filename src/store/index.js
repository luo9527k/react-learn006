import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import * as Types from '../js/action-type';
import reduxLogger from 'redux-logger';

// 管理员：修改STORE容器中的公共状态
const initial = {
  //第一次派发，会见该值传递给reducer
  supNum: 10,
  oppNum: 5,
};

const reducer = (state = initial, action) => {
  //state:存储容器中的公共状态(最开始的时候没有，赋值初始值)
  // action:每一次基于dispach派发的时候，传递进来的行为对象[要求必须具备type属性，存储派发的行为标识]

  //进行浅克隆
  state = { ...state };
  switch (action.type) {
    //第二次，基于业务逻辑，实现手动派发
    case Types.vote_sup:
      state.supNum++;
      break;
    case Types.vote_opp:
      state.oppNum++;
      break;
    default:
  }
  //return 的内容，会整体替换store的内容
  return state;
};

//创建store公共容器
const store = createStore(reducer, applyMiddleware(reduxLogger));
export default store;
