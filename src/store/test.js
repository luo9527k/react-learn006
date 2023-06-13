import { createStore } from 'redux';

const init = {
  one: 10,
  two: 20,
};

const Test = (state = init, action) => {
  state = { ...state };
  if (action.type === 'vote_one') {
    state.one++;
  } else if (action.type === 'vote_two') {
    state.two++;
  }
  return state;
};

const store = createStore(Test);
export default store;
