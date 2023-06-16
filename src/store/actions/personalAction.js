import * as Types from '../js/action-types';

const personalAction = {
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

export default personalAction;
