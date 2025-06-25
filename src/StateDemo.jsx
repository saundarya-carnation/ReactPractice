import { useState } from 'react';

function StateDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>useState Demo</h2>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default StateDemo;
