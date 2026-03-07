import UserCard from "./UserCard"

export default function BlogPost({ title, name, email, role, content, date }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      margin: "20px",
      borderRadius: "10px"
    }}>
      <h1>{title}</h1>

      <UserCard name={name} email={email} role={role} />

      <p>{content}</p>

      <p><strong>Published:</strong> {date}</p>
    </div>
  )
}