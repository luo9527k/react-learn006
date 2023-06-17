import * as Types from '../../js/action-type';

const voteAction = {
  support() {
    return {
      type: Types.vote_sup,
    };
  },
  oppose() {
    return {
      type: Types.vote_opp,
    };
  },
};

export default voteAction;
