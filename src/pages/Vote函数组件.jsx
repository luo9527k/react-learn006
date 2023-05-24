/*
函数是一个静态组件
  第一次渲染组件，把函数执行
  - 产生一个私有的上下文：E（V）
  - 把解析出来的JSX元素[virtualDOM]进行渲染
  当我们点击按钮时，会把绑定的小函数执行：
  - 修改上下文E（V）的变量
  - 私有变量值发生了改变，但是视图不会更新，函数组件第一次渲染完成后，组件的内容不会根据某些操作，再次进行更新，所以它是静态组件

  除非在父组件中，重新调用这个函数组件
  【变为动态组件两种方式】：
  类组件：
  Hooks组件（在函数组件中，使用Hooks函数）：
*/

const Vote = (props) => {
  const { title } = props;
  //创建一个容器来存储人数
  let supNum = 8,
    opNum = 2;
  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">{title}</h2>
        <span>{supNum + opNum}</span>
      </div>
      <div className="main">
        <p>支持人数：{supNum}人</p>
        <p>反对人数：{opNum}人</p>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            supNum++;
            console.log(supNum);
          }}
        >
          支持
        </button>
        <button
          onClick={() => {
            opNum--;
            console.log(opNum);
          }}
        >
          反对
        </button>
      </div>
    </div>
  );
};

export default Vote;
