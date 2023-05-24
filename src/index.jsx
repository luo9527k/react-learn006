import React from 'react'; //语法核心
import ReactDOM from 'react-dom/client'; //渲染核心
//导入组件
// import Dialog from './components/Dialog';
// import Tast from './pages/Tast';
import Vote from './pages/Vote';

//获取id为root的容器，作为我们的根容器
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {/* <Dialog title="提示" content="我TM来了" />
    <Dialog content="dialog组件弹窗">
      <button>确定</button>
      <button>取消</button>
    </Dialog>
    <Tast title="dom" content="root" /> */}
    <Vote title="vote投票" />
  </>
);
