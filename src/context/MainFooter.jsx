import React from 'react';
import ThemeContext from '../ThemeContext';

class MainFooter extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { Btn } = context;
          return (
            <div>
              <button onClick={Btn}>点击此处</button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default MainFooter;
