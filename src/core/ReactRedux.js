import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';

import { bindActionCreators } from 'redux';

const ThemeContext = createContext();

// Provider：把传递进来的store放在根组件的上下文中
export function Provider(props) {
  let { store, children } = props;
  return (
    <ThemeContext.Provider value={{ store }}>{children}</ThemeContext.Provider>
  );
}

// connect 获取上下文中的store，然后把公共状态中、要派发的方法等，都基于属性传递给需要渲染的组件：让更新的组件放在redux事件中

export function connect(mapStateToProps, mapDispatchToProps) {
  // 处理默认值
  if (!mapStateToProps) {
    mapStateToProps = () => {
      //不写参数：则不传递给组件传递
      return {};
    };
  }
  if (mapDispatchToProps) {
    mapDispatchToProps = (dispatch) => {
      // 不写参数：把dispatch方法传递给组件
      return { dispatch };
    };
  }

  return function currying(Component) {
    // Component:最终要渲染的组件
    //  HOC:我们最后基于export default导出的组件
    return function HOC(props) {
      //我们需要获取上下文中的store
      let { store } = useContext(ThemeContext),
        { getState, dispatch, subscribe } = store;
      //向事件池中加入组件更新的办法
      let [, forceUpdate] = useState(0);
      useEffect(() => {
        let unsubscribe = subscribe(() => {
          forceUpdate(+new Date());
        });
        return () => {
          //unsubscribe()执行从事件池中移除该函数
          unsubscribe();
        };
      }, []);

      //把mapStateToProps/mapDispatchToProps，把执行的返回值，作为属性传递给组件
      let state = getState(),
        nextState = useMemo(() => {
          mapStateToProps(state);
        }, [state]);
      //判断类型
      let dispatchProps = {};
      if (typeof mapDispatchToProps === 'function') {
        dispatchProps = mapDispatchToProps(dispatch);
      } else {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      }

      return (
        <Component {...props} {...nextState} {...dispatchProps}></Component>
      );
    };
  };
}
