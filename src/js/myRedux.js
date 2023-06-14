import _ from './assets/utils';

//实现redux
export const createStore = function createStore(reducer) {
  if (typeof reducer !== 'function') throw new Error('this is not a function');
  let state, //存放公共状态
    listeners = []; //事件池

  //获取公共状态
  const getState = () => {
    return state;
  };

  //向事件池中加入组件更新的方法
  const subscribe = (listener) => {
    if (typeof listener !== 'function')
      throw new TypeError('this is not a function');
    if (!listeners.includes(listener)) {
      //如果listeners 没有listener则添加
      listeners.push(listener);
    }
    //返回一个从事件池中[需要去重操作]
    return function unsubscribe() {
      let index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  //派发任务从一个事件中，移除方法的函数
  return (dispatch = (action) => {
    if (!_.isPlainObject(action))
      throw new TypeError('actions must be plain objects');
    if (typeof action.type === 'undefined')
      throw new TypeError('Actions may not have an undefind');

    // reducer执行、传递、公共状态、行为对象：接收执行的返回值，替换公共状态
    state = reducer(state, action);

    //当状态更改，我们还需要把事件池中的方法执行
    listeners.forEach((listener) => {
      listener();
    });

    return action;
  });

  const randomString = () => Math.random(36).substring(7).split('').join('.');
  dispatch({
    type: '@@redux/INIT' + randomString(),
  });

  //返回创建的store对象
  return {
    getState,
    subscribe,
    dispatch,
  };
};
