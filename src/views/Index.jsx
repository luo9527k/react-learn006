import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const Index = (props) => {
  const { title, handle, top } = props;
  const context = useContext(ThemeContext);
  console.log(context);

  return (
    <>
      <h2>{title}</h2>
      <div>Index</div>
      <div>{handle}</div>
      <div>{top}</div>
    </>
  );
};

export default Index;
