import { useState } from 'react';

export default function ClickTracker() {
  const [clicks, setClicks] = useState(0);  

  const handleClick = () => {
    setClicks(clicks + 1);  
  };

  const handleReset = () => {
    setClicks(0);  
  };

  return (
    <div>
      <h2>You've clicked {clicks} times</h2>
      <button onClick={handleClick}>Click Me!</button>  {/* Increment on click */}
      <button onClick={handleReset}>Reset</button>  {/* Reset count */}
    </div>
  );
}