export default function TemperatureDisplay({ temp }) {
  return (
    <div>
      <h2>Current Temperature: {temp}°C</h2>
      <p>
        {temp < 15
          ? "It's cold!"
          : temp > 25
          ? "It's warm!"
          : "It's comfortable"}
      </p>
    </div>
  );
}