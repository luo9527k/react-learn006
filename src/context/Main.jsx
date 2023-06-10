import React from 'react';
//导入上下文对象
import ThemeContext from '../ThemeContext';
import MainLess from './MainLess';

class Main extends React.Component {
  state = {
    bba: '宝马',
    bbc: '丰田',
  };
  Btn = () => {
    console.log('尽情狂飙');
  };
  render() {
    const { bba, bbc, Btn } = this.state;
    return (
      <ThemeContext.Provider value={{ bba, bbc, Btn: this.Btn }}>
        <div>Main组件</div>
        <div>
          这是：
          {bba}--{bbc}
        </div>
        <button onClick={Btn}>按钮</button>
        <MainLess />
      </ThemeContext.Provider>
    );
  }
}
export default Main;
