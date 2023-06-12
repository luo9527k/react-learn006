import React from 'react';
import ThemeContext from '../ThemeContext';

class MainLess extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { bba, bbc } = this.context;
    return (
      <ThemeContext.Provider value={{ bba, bbc }}>
        <div style={{ marginTop: 20 }}>
          {bba}-{bbc}
        </div>
      </ThemeContext.Provider>
    );
  }
}
export default MainLess;
