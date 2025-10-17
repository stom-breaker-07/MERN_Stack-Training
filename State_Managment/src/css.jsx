import React from "react";
import "./External.css";

const Css = () => {
  const style = {
    backgroundColor: "lightblue",
    padding: "10px",
    borderRadius: "5px",
  };
  //static Inline CSS
  function Greeting() {
    return <h2 style={style}> Hello inline</h2>;
  }
  // Dynamic Inline CSS
  function Temperature({ value }) {
    return (
        <p style={{color:value>30?"red":"blue"}}>Temp : {value}°C</p>
    );
  }

  return (<div>
      <h1 className="title">Hello External CSS</h1>
      {Greeting()}
      {Temperature({ value: 31 })}
    </div>
  );
};

export default Css;
