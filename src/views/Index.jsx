import React from 'react';

class Index extends React.Component {
  render() {
    return (
      <>
        <div
          className="outer"
          onClick={() => {
            console.log('outer 冒泡[合成]');
          }}
          onClickCapture={() => {
            console.log('outer 捕获[合成]');
          }}
        >
          <div
            className="inner"
            onClick={() => {
              console.log('inner 冒泡[合成]');
            }}
            onClickCapture={() => {
              console.log('inner 捕获[合成]');
            }}
          ></div>
        </div>
      </>
    );
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      console.log('document 捕获');
    });
    document.addEventListener(
      'click',
      () => {
        console.log('root 冒泡 [原生]');
      },
      false
    );
    let outer = document.querySelector('.outer');
    outer.addEventListener(
      'click',
      () => {
        console.log('outer 捕获[原生]');
      },
      false
    );

    let inner = document.querySelector('.inner');
    inner.addEventListener(
      'click',
      () => {
        console.log('inner 捕获 [原生]');
      },
      true
    );

    inner.addEventListener(
      'click',
      () => {
        console.log('inner 冒泡[原生]');
      },
      false
    );
  }
}
export default Index;

/*
  React中合成事件的处理原理:
  - 都是基于“事件委托处理的”，都是委托给root这个容器，[捕获和冒泡都做了委托]
  - 在17版本之前都是委托给document容器[而且只做了冒泡阶段的委托]
  - 对于没有实现事件传播机制的事件，才是单独做的事件绑定[例如 onMounseEnter/onMouseLeave...]

  #root这个容器做了事件绑定[捕获和冒泡都做了]
    原因：因为组件中渲染的内容，最后都会插入到#root容器中，这样点击页面中任何一个元素，最后都会把#root的点击行为触发！！
    而在给#root绑定的方法中，把之前的元素设置的属性，在相应的阶段执行！！
*/
