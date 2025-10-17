import React from "react";

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
  Greeting();
  Temperature(35);
};

export default Css;
