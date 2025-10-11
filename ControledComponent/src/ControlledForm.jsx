import React, { useState } from 'react'

function ControlledForm() {
    const [name ,setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
        document.getElementById("result").innerText=e.target.value;
    };

    const handleSubmit=(e) => {
        e.preventDefault();
        alert(`Submitted Name: ${name}`);
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter your name: </label>
            <input type="text" value={name} onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
        <div id="result"></div>
    </div>
  )
}

export default ControlledForm