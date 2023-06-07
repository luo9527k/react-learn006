import React, { useState, useEffect, useLayoutEffect } from 'react';

/*
  useEffect:在函数组件中，使用生命周期函数
    - useEffect(callback)
    - 第一次渲染完成后，执行callback，等价于 compoentDidMount
    - 在组件每一次更新完毕后，也会执行callback，等价于 compoentDidUpdate

    useEffect(callback,[])
    - 只渲染一次后，执行callback，每一次执行更新完毕后，callback 不再执行
    - 等价于 compoentDidMount

    useEffect(callback,[依赖的状态(多个状态)])
    - 第一次渲染完成后，执行callback
    - 当依赖的状态值(或者多个依赖状态中的一个)发生改变，也会触发callback执行
    - 但是依赖的状态如果没有变化，在组件更新的时候，callback是不会执行的
 */
const Page = () => {
  let [num, setNum] = useState(0);

  //callback没有设置依赖
  useEffect(() => {
    console.log('ok', num);
  });

  //callback 无依赖
  useEffect(() => {
    console.log('ok2', num);
  }, []);

  //callback 依赖num
  useEffect(() => {
    console.log('ok3', num);
  }, [num]);

  //callback没有设置依赖 没有任何输出
  useEffect(() => {
    return () => {
      //返回的小函数，会在组件释放的时候执行
      //获取的是上一次的状态值
      console.log('ok4', num);
    };
  }, [num]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, [num]);

  useEffect(() => {
    console.log('useEffect');
  });

  const handle = () => {
    setNum(num + 1);
  };
  return (
    <>
      <div>
        <span style={{ color: num === 0 ? 'red' : 'green' }}>{num}</span>
        <button onClick={handle}>增加</button>
      </div>
    </>
  );
};

export default Page;

/*
如果链表中的callback执行又修改了状态值[视图更新]，对于useEffect来讲：第一次真实DOM已经渲染，组件更新会重新渲染真实的DOM；所以频繁切换的时候，会出现样式内容闪烁

对于 useLayoutEffect 来讲：第一次真实DOM还未渲染，遇到callback中修改了状态，视图立即更新，创建出新的 virtualDOM 然后和上一次的virtualDOM合并在一起渲染为真实DOM；也就是此类需求下，真实DOM只会渲染一次

useLayoutEffect 会阻塞浏览器渲染真实DOM，优先执行Effect链表中的callback；
useEffect 不会阻塞浏览器渲染真实DOM，在渲染真实DOM的同时，去执行Effect链表中的callback
  - useLayoutEffect 设置的callback要优先于useEffect去执行
  - 两者设置的callback 中依旧可以获取DOM元素[原因：真实DOM对象已经创建了，区别只是浏览器是否渲染]
   - 如果在callback函数中又修改了状态值[视图又要更新]
   - useEffect：浏览器肯定是肯定是一把第一次真实已经绘制，在渲染第二次真实DOM
   - useLayoutEffect：浏览器是把两次DOM的渲染，合并在一起渲染的


视图更新的步骤：
  第一步：基于babel-presel-react-app把JSX编译createElement格式
  第二步：把createElement执行，创建 virtualDOM
  第三步：基于root.render方法 virtualDOM 变为真实DOM对象[DOM-DIFF]
        useLayoutEffect阻塞第四步操作，先去执行 Effect 链表中方法[同步操作]
        useEffect第四步操作和Effect链表中的方法执行，是同步进行的[异步操作]
  第四步：浏览器渲染和绘制真实DOM对象
*/
