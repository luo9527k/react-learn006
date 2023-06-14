import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const Test = () => {
  const { index } = useContext(ThemeContext);
  console.log(index);
};
export default Test;
