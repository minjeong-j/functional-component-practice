// src/components/Counter.js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      {count >= 10 && <p style={{ color: 'red' }}>최대 카운트 도달</p>}
    </div>
  );
}

export default Counter;