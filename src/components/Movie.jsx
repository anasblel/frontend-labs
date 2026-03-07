export default function Movie({ title, director, year, rating }) {
  const stars = "⭐".repeat(rating)

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{title}</h3>
      <p>Director: {director}</p>
      <p>Year: {year}</p>
      <p>Rating: {stars}</p>
    </div>
  )
}