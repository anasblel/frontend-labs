export default function TemperatureControl({ onIncrease, onDecrease }) {
  return (
    <div>
      <button onClick={onIncrease}>+1°</button>
      <button onClick={onDecrease}>-1°</button>
    </div>
  );
}