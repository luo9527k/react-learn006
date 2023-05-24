//封装一个对象迭代的方法
const each = function each(obj, callback) {
  if (obj === null || typeof obj !== 'object')
    throw new TypeError('obj is not a object');
  if (typeof callback != 'function')
    throw new TypeError('callback is not a function');
  let keys = Reflect.ownKeys(obj);
  keys.forEach((key) => {
    let value = obj[key];
    //每一次迭代，都需要把回调函数执行
    callback(value, key);
  });
};

let arr = [10, 20, 30, 40];
arr[Symbol('aa')] = 100;
let keys = Reflect.ownKeys(arr);
console.log(keys);

// 创建虚拟对象
export function createElement(ele, props, ...children) {
  let virtualDom = {
    $$typeof: Symbol('react.element'),
    key: null,
    ref: null,
    type: null,
    props: {},
  };
  let len = children.lenght;

  virtualDom.type = ele;
  if (props != null) {
    virtualDom.props = {
      ...props,
    };
  }
  if (len === 1) virtualDom.props.children = children(0);
  if (len > 1) virtualDom.props.children = children;
  return virtualDom;
}

//render:把虚拟DOM转变为真实Dom
export function render(virtualDOM, container) {
  let { type, props } = virtualDOM;
  //存储的是标签名：动态创建这样的一个标签
  if (typeof type == 'string') {
    let ele = document.createElement(type);
    // 为标签设置相关的属性 & 子节点
    each(props, (value, key) => {
      // <div className='box'></div>
      //对className的处理
      if (key === 'className') {
        ele.className = value;
        return;
      }
      // 对stayle进行处理
      if (key === 'style') {
        each(value, (val, attr) => {
          ele.style[attr] = val;
        });
        return;
      }
      //对子节点的处理
      if (key === 'children') {
        let children = value;
        if (!Array.isArray(children)) children = [children];
        children.forEach((child) => {
          //如果子节点是文本节点，直接插入即可
          if (typeof child === 'string' || 'number') {
            ele.appendChild(document.createTextNode(child));
            return;
          }
          //如果子节点又是一个virtualDom：那么就进行递归
          render(child, ele);
        });
        return;
      }
      ele.setAttribute(key, value);
    });
    //把新增的标签，添加到指定的容器中
    container.appendChild(ele);
  }
}
