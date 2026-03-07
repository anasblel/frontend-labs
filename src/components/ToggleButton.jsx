export default function ToggleButton() {
  const isVisible = true

  return (
    <div style={{ margin: "20px" }}>
      <button>Click me!</button>

      <p style={{ color: isVisible ? "green" : "gray" }}>
        {isVisible ? "Content is VISIBLE" : "Content is HIDDEN"}
      </p>
    </div>
  )
}