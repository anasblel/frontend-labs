export default function Checkout({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div>
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}