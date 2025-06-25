import { useEffect, useState } from 'react';

function EffectDemo() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>useEffect Demo – Time: {seconds}s</p>;
}

export default EffectDemo;
