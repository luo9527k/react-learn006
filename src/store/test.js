import { createStore } from 'redux';
import * as Types from '../js/action-type';

const init = {
  one: 10,
  two: 20,
};

const Test = (state = init, action) => {
  state = { ...state };
  if (action.types === Types.vote_sup) {
    state.one++;
  } else if (action.type === Types.vote_opp) {
    state.two++;
  }
  return state;
};

const store = createStore(Test);
export default store;
