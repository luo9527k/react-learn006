import * as Types from '../../js/action-type';

//延迟函数：返回promise实例，在指定的时间后，才会让实例成功。
const delay = (internal = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, internal);
  });
};

const voteAction = {
  support() {
    return async (dispatch) => {
      await delay();
      dispatch({
        type: Types.vote_sup,
      });
    };
  },
  oppose() {
    return {
      type: Types.vote_opp,
    };
  },
};

export default voteAction;
