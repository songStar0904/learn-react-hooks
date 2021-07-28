import { count } from 'console';
import React, { useState } from 'react';

/**
 * 每一次渲染都有它自己的 Props 和 State
 * 每一次渲染都有它自己的事件处理函数
 * 当点击更新状态的时候，函数组件都会重新被调用，那么每次渲染都是独立的，取到的值不会受后面操作的影响
 */
const Count1: React.FC = () => {
  const [count, setCount] = useState(0);
  console.log('count1', count);
  const alertCount = () => {
    setTimeout(() => {
      // alert 只能获取到点击按钮时的哪个状态
      alert(count);
    }, 3000);
  };
  return (
    <>
      <h2>每次渲染都是独立的闭包</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={alertCount}>alert</button>
    </>
  );
};

/**
 * 果新的 state 需要通过使用先前的 state 计算得出，那么可以将回调函数当做参数传递给 setState。该回调函数将接收先前的 state，并返回一个更新后的值。
 */
const Count2: React.FC = () => {
  const [count, setCount] = useState(0);
  console.log('count2', count);
  const async = () => {
    setTimeout(() => {
      // setCount(count + 1);
      // 这样每次执行时都会去获取一遍 state，而不是使用点击触发时的那个 state
      setCount(count => count + 1);
    }, 3000);
  };
  return (
    <>
      <h2>函数式更新</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={async}>async + </button>
    </>
  );
};

const Count3: React.FC = () => {
  // 这个函数只在初始渲染时执行一次，后续更新状态重新渲染组件时，该函数就不会再被调用
  const initialState = () => {
    console.log('initialState');
    return {
      num: 0,
    };
  };
  const [count, setCount] = useState(initialState);
  console.log('count3', count);
  return (
    <>
      <p>{count.num}</p>
      <button onClick={() => setCount({ num: count.num + 1 })}>+</button>
      <button onClick={() => setCount(count)}>set count</button>
    </>
  );
};

const Demo1: React.FC = () => {
  return (
    <>
      <Count1></Count1>
      <Count2></Count2>
      <Count3></Count3>
    </>
  );
};
export default Demo1;
