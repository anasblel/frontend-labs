import './App.css'  
import Counter from './component/Counter';
import PersonForm from './component/PersonForm';
import ShoppingList from './component/ShoppingList';
import AppSettings from './component/AppSettings';
import ClickTracker from './component/ClickTracker';
import Calculator from './Calculator';
import TextEcho from './component/TextEcho';
import SignupForm from './component/SignupForm';
import PreferencesForm from './component/PreferencesForm';
import Thermostat from './component/Thermostat';
import FruitBasket from './component/FruitBasket';


import { useState } from 'react';
import ProductList from './component/ProductList';
import ShoppingCart from './component/ShoppingCart';
import Checkout from './component/Checkout';

const initialProducts = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
  { id: 4, name: 'Monitor', price: 299 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <h1>Lab 2</h1>
      <Counter />
      <PersonForm />
      <ShoppingList />
      <AppSettings />
      <ClickTracker />
      <Calculator />
      <TextEcho />
      <SignupForm />
      <PreferencesForm />
      <Thermostat />
      <FruitBasket />
      <ProductList products={initialProducts} onAdd={addToCart} />
      <ShoppingCart cart={cart} onRemove={removeFromCart} />
      <Checkout cart={cart} />
    </div>
  );
}

export default App
