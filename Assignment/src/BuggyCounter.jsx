import React, { useState } from "react";

function BuggyCounter() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error("Crashed intentionally!");
  }

  return (
    <div>
      <h3>Buggy Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default BuggyCounter;
