import React from 'react'; //语法核心
import ReactDOM from 'react-dom/client'; //渲染核心
//导入组件
// import Dialog from './components/Dialog';
// import Tast from './pages/Tast';
// import Vote from './pages/Vote';
import Demo from './pages/Demo';

//获取id为root的容器，作为我们的根容器
const root = ReactDOM.createRoot(document.getElementById('root'));

/*
  render函数在渲染的时候，如果type是：
    - 字符串：创建一个标签
    - 普通函数：把函数执行，并且把props传递给函数
    - 构造函数：把构造函数基于new执行[也就是创建类的一个实例]
    React.StrictMode:React的严格模式，可以检测一些不规范的
*/

root.render(
  <>
    {/* <Dialog title="提示" content="我TM来了" />
    <Dialog content="dialog组件弹窗">
      <button>确定</button>
      <button>取消</button>
    </Dialog>
    <Tast title="dom" content="root" /> */}

    {/* <Vote title="vote投票" /> */}

    <Demo />
    {/* <Tast /> */}
  </>
);
