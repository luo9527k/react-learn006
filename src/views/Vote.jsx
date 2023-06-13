import React, { useContext } from 'react';
import { Button } from 'antd'
import ThemeContext from '../ThemeContext'

class Vote extends React.Component {
  static contextType=ThemeContext
  render() {
    const {index}=this.context
    return (
      <>
        <Button onClick={() => {
          index.action.type({
          type:'vote_sup'
        })}}>+1</Button>
        <Button onClick={}>+1</Button>
      </>
    );
  }
}
export default Vote;
