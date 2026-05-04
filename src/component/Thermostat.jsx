import { useState } from 'react';
import TemperatureDisplay from './TemperatureDisplay';
import TemperatureControl from './TemperatureControl';

export default function Thermostat() {
  const [temperature, setTemperature] = useState(20); // Initial temperature set to 20

  // Function to increase the temperature by 1 degree
  const increaseTemperature = () => setTemperature(temperature + 1);

  // Function to decrease the temperature by 1 degree
  const decreaseTemperature = () => setTemperature(temperature - 1);

  return (
    <div>
      <TemperatureDisplay temp={temperature} />
      <TemperatureControl onIncrease={increaseTemperature} onDecrease={decreaseTemperature} />
    </div>
  );
}