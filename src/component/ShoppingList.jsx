import { useState } from 'react';

export default function ShoppingList() {
  const [items, setItems] = useState(['Milk', 'Bread', 'Eggs']);
  
  const addItem = () => {
    const newItem = ['Cheese', 'Butter', 'Yogurt'][Math.floor(Math.random() * 3)];
    setItems([...items, newItem]);
  };

  const removeItem = () => {
    setItems(items.slice(0, items.length - 1));
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Last Item</button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}