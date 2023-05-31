import React from 'react';

class Demo1 extends React.Component {
  data = {
    arr: [
      {
        id: 1,
        title: '百度',
      },
      {
        id: 2,
        title: 'f搜',
      },
      {
        id: 3,
        title: '联合搜索',
      },
    ],
  };

  handle = (title) => {
    //item:点击这一项的数值
    console.log('点击了：', title);
  };
  render() {
    //拿取数据
    const { arr } = this.data;
    return (
      <>
        <div>
          {arr.map((item) => {
            const { id, title } = item;
            return (
              <span key={id} onClick={this.handle.bind(this, title)}>
                {item.id} --{item.title}
                <br />
              </span>
            );
          })}
        </div>
      </>
    );
  }
}
export default Demo1;
