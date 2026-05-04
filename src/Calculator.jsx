import { useState } from 'react';

export default function Calculator() {
  const [number, setNumber] = useState(0); 
  
  const handleAdd = () => setNumber(number + 1);
  const handleSubtract = () => setNumber(number - 1);
  const handleMultiply = () => setNumber(number * 2);
  const handleDivide = () => setNumber(number / 2);
  const handleReset = () => setNumber(0);

  return (
    <div>
      <h2>Current Number: {number}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleMultiply}>×2</button>
      <button onClick={handleDivide}>÷2</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}