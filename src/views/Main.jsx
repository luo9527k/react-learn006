// import Reat, { useState } from 'react';

// const Main = () => {
//   const [count, setCount] = useState(0);
//   const sum = () => {
//     setCount(count + 10);
//   };
//   return (
//     <>
//       <div>{count}</div>
//       <button onClick={sum}>打印</button>
//     </>
//   );
// };

// export default Main;

import React from 'react';

class Main extends React.Component {
  state = {
    num: 0,
  };
  rende() {
    return (
      <>
        <div>{num}</div>
      </>
    );
  }
}
