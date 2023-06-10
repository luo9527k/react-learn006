import React from 'react';
import ThemeContext from '../ThemeContext';

class MainLess extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={{ bba, bbc }}>
        <div>
          {bba}-{bbc}
        </div>
      </ThemeContext.Provider>
    );
  }
}
export default MainLess;
