export default function StatusBadge() {
  const isOnline = true

  return (
    <div style={{ margin: "20px" }}>
      <h3 style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </h3>

      <p>
        User is currently {isOnline ? "online" : "offline"}
      </p>
    </div>
  )
}
