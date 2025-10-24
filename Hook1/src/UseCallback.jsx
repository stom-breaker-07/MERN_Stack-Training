import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child Re-rendered");
  return <button onClick={onClick}>Click Me</button>;
}
function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Button Clicked!");
  }, []);
return (
  <div>
    <h3>Count : {count}</h3>
    <button onClick={() => setCount(count + 1)}>Increment Count</button>
    <Child onClick={handleClick} />
  </div>
);
}

export default Parent;
