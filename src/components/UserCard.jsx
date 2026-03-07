export default function UserCard({ name, email, role }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  )
}