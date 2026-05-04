import { useEffect, useState } from "react";

function TitleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Title Counter</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default TitleCounter;