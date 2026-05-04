import { useState } from 'react';
import FruitList from './FruitList';
import AddFruitForm from './AddFruitForm';

export default function FruitBasket() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange']);  // Initial fruits

  // Add new fruit to the list
  const handleAddFruit = (newFruit) => {
    if (newFruit.trim()) {
      setFruits([...fruits, newFruit]);
    }
  };

  // Remove fruit from the list
  const handleDeleteFruit = (index) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Fruit Basket</h2>
      <AddFruitForm onAdd={handleAddFruit} />
      <FruitList fruits={fruits} onDelete={handleDeleteFruit} />
    </div>
  );
}