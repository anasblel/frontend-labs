import cat from "../assets/cat.jpg"

// Fixed: Wrapped in Fragment
function FixedComponent1() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is fixed</p>
    </>
  )
}

// Fixed: Use ternary instead of if
function FixedComponent2() {
  const isTrue = true
  return (
    <div>
      <p>Result: {isTrue ? "Yes" : "No"}</p>
    </div>
  )
}

// Fixed: className + self-closing img
function FixedComponent3() {
  return (
    <div className="container">
      <img src={cat} alt="A cat" />
      <p>Welcome to Lab 1!</p>
    </div>
  )
}

export { FixedComponent1, FixedComponent2, FixedComponent3 }