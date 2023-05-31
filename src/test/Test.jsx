import React from 'react';

class Tast extends React.Component {
  proson = {
    data: [
      {
        id: 1,
        name: '张三',
      },
      {
        id: 2,
        name: '李四',
      },
      {
        id: 3,
        name: '王五',
      },
    ],
  };

  current = () => {
    this.proson.push`<div>添加</div>`;
  };
  render() {
    return (
      <>
        <div>
          <span>
            {data.map((item) => {
              const { id, name } = item;
              return (
                <div
                  key={id}
                  onClick={this.current.bind(this, name)}
                  style={{ marginTop: 30 }}
                >
                  {item.id}--{item.name}
                </div>
              );
            })}
          </span>
        </div>
      </>
    );
  }
}

export default Tast;
