export default function Product({ title, price, inStock, rating }) {
    const stars = "⭐".repeat(rating)

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h3>{title}</h3>

      <p>Price: ${price.toFixed(2)}</p>

      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <p>Rating: {stars}</p>
    </div>
  )
}