//合并各个模块的reducer

import personal from './personal'
import vote from './vote'

const reducers = {
  vote=vote,
  personal=personal
}

export default reducers