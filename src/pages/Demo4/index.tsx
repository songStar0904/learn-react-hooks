import React, { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Demo4: React.FC = () => {
  const [color, setColor] = useState('red');
  useEffect(() => {
    alert('effect ' + color);
    console.log('effect', color);
  });
  useLayoutEffect(() => {
    // alert('layouteffect ' + color);
    console.log('layouteffect', color);
  });
  return (
    <>
      <p style={{ background: color }}>颜色</p>
      <button onClick={() => setColor('red')}>红</button>
      <button onClick={() => setColor('green')}>绿</button>
      <button onClick={() => setColor('blue')}>蓝</button>
    </>
  );
};

export default Demo4;
