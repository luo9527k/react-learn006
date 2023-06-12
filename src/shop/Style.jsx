/* 
    高阶组件：利用js中的闭包[柯里化]实现组件代理
*/
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  index: {
    fontSize: '10px',
    color: 'bule',
  },
});

const Style = (props) => {
  console.log(props);
  return (
    <>
      <div className="index">Style组件</div>
    </>
  );
};

//创建一个代理组件
const proxyTest = (Component) => {
  return function Hoc(props) {
    // eslint-disable-next-line react/prop-types
    // let {a,Bun}=props
    let sty = useStyles();
    console.log(props);
    return <Component {...props} {...sty} isfalse={false}></Component>;
  };
};

export default proxyTest(Style);
