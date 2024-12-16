// src/components/Greeting.js
import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>안녕하세요, {name}!</h1>
    </div>
  );
}

export default Greeting;