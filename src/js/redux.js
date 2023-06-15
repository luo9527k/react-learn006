import { creactStore } from 'redux';
//创建初始状态
const init = {
  one: 1,
  two: 2,
};

const reducer = (state = init, action) => {
  if (action.type === 'vite_set') {
    state.one++;
  } else {
    state.two++;
  }
  return state;
};

const store = creactStore(reducer);

export default store;
