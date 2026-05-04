export default function ProductList({ products, onAdd }) {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onAdd(product)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}