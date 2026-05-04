import { useEffect, useState } from "react";

function BrokenEffect() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  // Example 1: Correct dependency
  // If userId changes, this effect runs again.
  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUser(data);
    }

    fetchUser();
  });

  // Example 2: Correct empty dependency
  // Runs only once when the component appears.
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // Example 3: Correct dependency with state update
  // Runs when count changes.
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Exercise 1.4: useEffect Bug Hunt</h2>

      <h3>Example 1: User Fetch</h3>
      <p>Current User ID: {userId}</p>
      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}

      <h3>Example 2: Count Effect</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default BrokenEffect;