import { useState } from 'react';

function StateDemo() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>useState  Demo</h2>

      {/* useState Example */}
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>

      <hr />

      {/* Ternary*/}
      <p>{isLoggedIn ? "You are logged in ✅" : "You are logged out ❌"}</p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default StateDemo;

