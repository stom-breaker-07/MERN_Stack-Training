import React from "react";
import React, { memo } from "react";

function Assignment() {
  const Square = memo(({ number }: { number: number }) => {
    console.log("Component rendered");
    const squared = number * number;
    return <div>{squared}</div>;
  });

  const number=10;
  Square(10);

  return <>
   <p>Hello</p>
   <p>Hello</p>
  </>;
}

export default Assignment;
