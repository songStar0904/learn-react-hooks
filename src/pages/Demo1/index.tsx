import React, { useState } from 'react';

const Demo1: React.FC = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  const alertCount = () => {
    setTimeout(() => {
      // alert 只能获取到点击按钮时的哪个状态
      alert(count);
    }, 3000);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={alertCount}>alert</button>
    </>
  );
};

export default Demo1;
