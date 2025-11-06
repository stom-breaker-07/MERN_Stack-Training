import React from "react";

const Square = React.memo(({ value }) => {
  console.log("Square re-rendered");
  return (
    <div
      style={{
        width: "80px",
        height: "80px",
        background: "#4caf50",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      {value * value}
    </div>
  );
});

export default Square;
